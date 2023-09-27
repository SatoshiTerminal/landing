// import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import 'animate.css';
import type { Metadata } from 'next';
import { Saira } from 'next/font/google';
// Origibal navbar
// import Navbar from '@/components/Navbar';
import Navbar from '@/components/navbar-scroll-section/NavbarScrollTo';
import Footer from '@/components/Footer';

const saira = Saira({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next 13 Starter Template',
  description: 'Next 13 Starter Template meta descriptions',
  openGraph: {
    title: 'Next 13 Starter Template',
    description:
      'Next 13 Starter Template open graph descriptions for social media',
    images: [
      {
        url: '/images/next-js--strter.jpg',
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
      <body className={saira.className}>
        <Navbar />
        {children}
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
