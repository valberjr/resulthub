import '@/styles/globals.css';
import { ClerkProvider, UserButton } from '@clerk/nextjs';

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
        <body className={`${inter.className} min-h-screen bg-gray-100`}>
          <div className="flex">
            <div className="flex flex-col justify-end items-center w-1/4 lg:w-1/5 bg-gray-900 min-h-screen p-4">
              <UserButton afterSignOutUrl="/" />
            </div>
            <main className="flex-1">
              <div className="mx-auto max-w-7xl p-4">{children}</div>
            </main>
          </div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
