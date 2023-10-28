import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "animate.css";
import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

// ==== Components ====
// Navbar srool to sections uncomment if needed
// import Navbar from '@/components/navbar-scroll-section/NavbarScrollTo';
// Footer
import Footer from "@/components/Footer";

// Fonts here
const outfit = Outfit({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ["500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--plus-jakarta-sans",
  display: "swap",
});

// Metadata for SEO

export const metadata: Metadata = {
  title: "Satoshi Terminal",
  description:
    "The Bloomberg Terminal for Crypto. Allowing Wall St to research crypto the same way they research stocks and bonds. The world’s first crypto research platform for Wall Street, designed & developed by former Bloomberg Terminal engineers.",
  openGraph: {
    title: "Satoshi Terminal",
    description:
      "The Bloomberg Terminal for Crypto. Allowing Wall St to research crypto the same way they research stocks and bonds. The world’s first crypto research platform for Wall Street, designed & developed by former Bloomberg Terminal engineers.",
    images: [
      {
        url: "/images/home-meta__img.jpg",
        width: 1280,
        height: 720,
      },
    ],
  },
  alternates: {
    canonical: "https://satoshiterminal.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${plus_jakarta_sans.variable}`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
