import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ritesh - Full-Stack & GenAI Engineer",
  description:
    "Professional Portfolio of Ritesh Singh - Full-Stack & GenAI Engineer specializing in MERN Stack and RAG Pipelines",
  keywords: ["portfolio", "engineer", "mern", "genai", "rag", "full-stack"],
  authors: [{ name: "Ritesh Singh" }],
  creator: "Ritesh Singh",
  openGraph: {
    title: "Ritesh - Full-Stack & GenAI Engineer",
    description: "Professional Portfolio",
    url: "https://ritesh-portfolio.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritesh - Full-Stack & GenAI Engineer",
    description: "Professional Portfolio",
    images: ["/og-image.jpg"],
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
