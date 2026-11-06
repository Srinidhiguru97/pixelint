import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PIXELINT — Digital Design & Technology Studio",
  description:
    "Independent digital design & technology studio. We transform ambitious ideas into meaningful digital experiences through design, technology and innovation.",
  keywords: [
    "PIXELINT",
    "Digital Design Studio",
    "Creative Technology",
    "UI/UX Design",
    "Web Development",
    "AI Digital Experiences",
    "Brand Identity",
    "Next.js Studio",
  ],
  authors: [{ name: "PIXELINT" }],
  creator: "PIXELINT",
  metadataBase: new URL("https://pixelint.studio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PIXELINT — Beyond the ordinary. Into what's next.",
    description:
      "Independent digital design & technology studio transforming ambitious ideas into meaningful digital experiences.",
    url: "https://pixelint.studio",
    siteName: "PIXELINT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIXELINT — Digital Design & Technology Studio",
    description:
      "Beyond the ordinary. Into what's next. Independent digital design & technology studio.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#08090D] text-slate-100 antialiased selection:bg-[#397BFF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
