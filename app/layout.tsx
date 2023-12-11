import ThemeController from '@/components/ui/ThemeController';
import '@/styles/globals.css';
import { ClerkProvider, UserButton } from '@clerk/nextjs';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
      <html data-theme="light" lang="en">
        <body className={`${inter.className} min-h-screen`}>
          <div className="flex">
            <div className="flex flex-col justify-end items-center w-1/4 lg:w-1/5 min-h-screen p-4 bg-base-300">
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                <ThemeController />
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
            <main className="flex-1">
              <div className="mx-auto max-w-7xl p-4">{children}</div>
            </main>
          </div>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
