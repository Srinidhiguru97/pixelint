import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PIXELINT — Independent Digital Design & Technology Studio",
  description:
    "Ideas deserve better execution. We transform ambitious ideas into meaningful digital experiences through design, technology and innovation.",
  keywords: [
    "PIXELINT",
    "Digital Design Studio",
    "Creative Technology",
    "Product Design",
    "UI/UX Design",
    "Brand Identity",
    "Web Development",
    "AI Experiences",
  ],
  authors: [{ name: "PIXELINT" }],
  creator: "PIXELINT",
  metadataBase: new URL("https://pixelint.studio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PIXELINT — Ideas deserve better execution.",
    description:
      "A product-minded creative studio for brands, businesses and ambitious founders.",
    url: "https://pixelint.studio",
    siteName: "PIXELINT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIXELINT — Independent Digital Design & Technology Studio",
    description:
      "Ideas deserve better execution. Digital design, brand strategy and creative technology.",
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
      <body className="min-h-screen bg-black text-[#E2E8F0] antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
