import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
  : "https://portfolio-ritesh.duckdns.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ritesh | Full-Stack & GenAI Developer",
    template: "%s | Ritesh",
  },
  description:
    "Portfolio of Ritesh — Full-Stack & GenAI Developer specializing in Next.js, MERN Stack, and RAG Pipelines. Explore featured projects, experience, and contact information.",
  applicationName: "Ritesh Portfolio",
  keywords: [
    "Ritesh",
    "Portfolio",
    "Full-Stack Developer",
    "GenAI Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MERN Stack",
    "RAG Pipelines",
    "LangChain",
    "Software Developer",
  ],
  authors: [{ name: "Ritesh", url: "https://github.com/ItsOnlyMe01" }],
  creator: "Ritesh",
  publisher: "Ritesh",
  openGraph: {
    title: "Ritesh | Full-Stack & GenAI Developer",
    description:
      "Full-Stack & GenAI Developer specializing in Next.js, MERN Stack, and RAG Pipelines. Explore featured projects, experience, and contact information.",
    url: siteUrl,
    siteName: "Ritesh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 600,
        height: 663,
        alt: "Ritesh - Full-Stack & GenAI Developer",
        type: "image/jpeg",
      },
      {
        url: "/my-image.png",
        width: 754,
        height: 833,
        alt: "Ritesh - Full-Stack & GenAI Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritesh | Full-Stack & GenAI Developer",
    description:
      "Full-Stack & GenAI Developer specializing in Next.js, MERN Stack, and RAG Pipelines.",
    images: ["/og-image.jpg"],
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
