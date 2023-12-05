import Navbar from '@/components/ui/Navbar';
import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Result Hub',
  description:
    'One-stop solution for organizing and accessing diverse results effortlessly',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Navbar />
          <div className="">{children}</div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
