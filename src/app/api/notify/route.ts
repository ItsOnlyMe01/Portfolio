import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      ref = "Direct",
      referrer = "",
      userAgent = "",
      screen = "",
      language = "",
      path = "/",
      clientLocation = null,
    } = body;

    // Detect location from Vercel / Cloudflare headers or fallback
    const country =
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      clientLocation?.country ||
      "Unknown Country";

    const city =
      req.headers.get("x-vercel-ip-city") ||
      clientLocation?.city ||
      "";

    const region =
      req.headers.get("x-vercel-ip-country-region") ||
      clientLocation?.region ||
      "";

    const locationDisplay = [city, region, country]
      .filter(Boolean)
      .join(", ") || "Unknown Location";

    // Format visitor source
    let source = "Direct Visit";
    if (ref && ref !== "Direct") {
      source = `${ref.toUpperCase()} (Tagged Link)`;
    } else if (referrer && referrer !== "Direct") {
      const lowerRef = referrer.toLowerCase();
      if (lowerRef.includes("naukri")) source = "Naukri";
      else if (lowerRef.includes("linkedin") || lowerRef.includes("lnkd.in")) source = "LinkedIn";
      else if (lowerRef.includes("github")) source = "GitHub";
      else if (lowerRef.includes("google")) source = "Google Search";
      else if (lowerRef.includes("whatsapp")) source = "WhatsApp";
      else if (lowerRef.includes("indeed")) source = "Indeed";
      else if (lowerRef.includes("wellfound") || lowerRef.includes("angel.co")) source = "Wellfound / AngelList";
      else if (lowerRef.includes("instagram")) source = "Instagram";
      else if (lowerRef.includes("t.co") || lowerRef.includes("twitter") || lowerRef.includes("x.com")) source = "X (Twitter)";
      else source = referrer;
    }

    const timestampIST = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || smtpUser;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured.");
      return NextResponse.json(
        { error: "SMTP credentials not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f1f5f9; border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
        <div style="background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); padding: 20px; text-align: center;">
          <h1 style="color: #0f172a; margin: 0; font-size: 22px;">🚀 New Portfolio Visitor!</h1>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; color: #e2e8f0; font-size: 14px;">
            <tr style="border-bottom: 1px solid #1e293b;">
              <td style="padding: 10px 0; font-weight: bold; color: #10b981; width: 35%;">📍 Location</td>
              <td style="padding: 10px 0;">${locationDisplay}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1e293b;">
              <td style="padding: 10px 0; font-weight: bold; color: #06b6d4;">💼 Source / Referrer</td>
              <td style="padding: 10px 0; font-weight: bold; color: #38bdf8;">${source}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1e293b;">
              <td style="padding: 10px 0; font-weight: bold; color: #10b981;">⏰ Time (IST)</td>
              <td style="padding: 10px 0;">${timestampIST}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1e293b;">
              <td style="padding: 10px 0; font-weight: bold; color: #06b6d4;">📱 Device / Browser</td>
              <td style="padding: 10px 0; word-break: break-all; font-size: 12px; color: #94a3b8;">${userAgent || "Unknown"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1e293b;">
              <td style="padding: 10px 0; font-weight: bold; color: #10b981;">🖥️ Screen</td>
              <td style="padding: 10px 0; color: #94a3b8;">${screen || "N/A"} (${language || "N/A"})</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #06b6d4;">🔗 Page URL</td>
              <td style="padding: 10px 0; color: #94a3b8;">${path}</td>
            </tr>
          </table>
        </div>
        <div style="background-color: #1e293b; padding: 12px 20px; text-align: center; font-size: 12px; color: #64748b;">
          Portfolio Visitor Tracking System • Automated Notification
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Alerts" <${smtpUser}>`,
      to: notificationEmail,
      subject: `🚀 Portfolio Visit from ${source} (${locationDisplay})`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Notification sent" });
  } catch (error: any) {
    console.error("Error sending notification email:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
