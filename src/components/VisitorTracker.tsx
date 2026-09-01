"use client";

import { useEffect } from "react";

export function VisitorTracker() {
  useEffect(() => {
    // Only send notification once per browser session
    const hasNotified = sessionStorage.getItem("portfolio_notified");
    if (hasNotified) return;

    const trackVisitor = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const ref =
          urlParams.get("ref") ||
          urlParams.get("source") ||
          urlParams.get("utm_source") ||
          "Direct";

        let clientLocation = null;
        try {
          // Quick location lookup (with timeout fallback)
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2000);
          const res = await fetch("https://ipapi.co/json/", {
            signal: controller.signal,
          });
          clearTimeout(timeoutId);
          if (res.ok) {
            const data = await res.json();
            clientLocation = {
              city: data.city || "",
              region: data.region || "",
              country: data.country_name || "",
            };
          }
        } catch {
          // Ignore location fetch errors; Vercel IP headers will be used
        }

        await fetch("/api/notify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ref,
            referrer: document.referrer || "Direct",
            userAgent: navigator.userAgent,
            screen: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language,
            path: window.location.pathname + window.location.search,
            clientLocation,
          }),
        });

        sessionStorage.setItem("portfolio_notified", "true");
      } catch (err) {
        // Silently fail if network/adblocker blocks the tracking call
      }
    };

    // Trigger after a brief delay so page render isn't blocked
    const timer = setTimeout(trackVisitor, 1000);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
