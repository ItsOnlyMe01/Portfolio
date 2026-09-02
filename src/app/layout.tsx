import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://ritesh-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ritesh Singh | Full-Stack & GenAI Engineer",
    template: "%s | Ritesh Singh",
  },
  description:
    "Portfolio of Ritesh Singh — Full-Stack Developer & GenAI Engineer specializing in Next.js, MERN Stack, and RAG Pipelines. Explore featured projects, experience, and contact information.",
  applicationName: "Ritesh Singh Portfolio",
  keywords: [
    "Ritesh Singh",
    "Portfolio",
    "Full-Stack Developer",
    "GenAI Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MERN Stack",
    "RAG Pipelines",
    "LangChain",
    "Software Engineer",
  ],
  authors: [{ name: "Ritesh Singh", url: "https://github.com/ItsOnlyMe01" }],
  creator: "Ritesh Singh",
  publisher: "Ritesh Singh",
  openGraph: {
    title: "Ritesh Singh | Full-Stack & GenAI Engineer",
    description:
      "Full-Stack Developer & GenAI Engineer specializing in Next.js, MERN Stack, and RAG Pipelines. Explore featured projects, experience, and contact information.",
    url: siteUrl,
    siteName: "Ritesh Singh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/my-image.png",
        width: 754,
        height: 833,
        alt: "Ritesh Singh - Full-Stack & GenAI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritesh Singh | Full-Stack & GenAI Engineer",
    description:
      "Full-Stack Developer & GenAI Engineer specializing in Next.js, MERN Stack, and RAG Pipelines.",
    images: ["/my-image.png"],
    creator: "@ItsOnlyMe01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/my-image.png",
    shortcut: "/my-image.png",
    apple: "/my-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-bg text-white antialiased`}>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
