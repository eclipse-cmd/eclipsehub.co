'use client';
import { Loader } from '@/components';
import { Suspense } from 'react';
import { ThemeProvider } from './theme-provider';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider enableSystem>{children}</ThemeProvider>
      {/* Other providers */}
    </Suspense>
  );
}
