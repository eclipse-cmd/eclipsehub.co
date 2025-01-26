import { Toaster } from '@/components/ui/sonner';
import { AppProviders } from '@/core';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import '../assets/styles/globals.scss';
// import 'prismjs/themes/prism-tomorrow.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const calmy = localFont({
  src: [
    {
      path: '../assets/fonts/Calmy.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-calmy',
});

export const metadata: Metadata = {
  title: 'Emmanuel Popoola Portfolio | Eclipse Hub',
  description: 'This is my personal portfolio',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background antialiased', GeistSans.className, mono.variable, calmy.variable)}>
        <AppProviders>{children}</AppProviders>
        <Toaster/>
        <Analytics />
      </body>
    </html>
  );
}
