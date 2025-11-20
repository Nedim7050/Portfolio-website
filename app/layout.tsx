import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/sections/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nadim Mejri - AI & Data Science Engineering Student',
  description: 'Portfolio of Nadim Mejri, AI & Data Science Engineering Student seeking PFE internship (National or International)',
  keywords: ['AI', 'Data Science', 'Machine Learning', 'Engineering', 'Portfolio', 'PFE Internship'],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}



