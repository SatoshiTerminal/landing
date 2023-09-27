// import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import 'animate.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

// ==== Components ====
// Navbar srool to sections
// import Navbar from '@/components/navbar-scroll-section/NavbarScrollTo';

import Footer from '@/components/Footer';

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Satoshi Terminal',
  description:
    'The Bloomberg Terminal for Crypto. Allowing Wall St to research crypto the same way they research stocks and bonds. The world’s first crypto research platform for Wall Street, designed & developed by former Bloomberg Terminal engineers.',
  openGraph: {
    title: 'Satoshi Terminal',
    description:
      'The Bloomberg Terminal for Crypto. Allowing Wall St to research crypto the same way they research stocks and bonds. The world’s first crypto research platform for Wall Street, designed & developed by former Bloomberg Terminal engineers.',
    images: [
      {
        url: '/images/home-meta__img.jpg',
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* Maybe need it later */}
        {/* <Navbar /> */}
        {children}
        {/* Vercel Analytics */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
