import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resulthub',
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
      <html lang="en" className="h-full">
        <body className={`h-full ${inter.className}`}>
          <div className="flex flex-col h-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {children}
          </div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
