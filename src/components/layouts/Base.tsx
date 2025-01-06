import { cn } from '@/lib/utils';
import React from 'react';
import { Footer, Header } from '../common';

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Base({ children, className, ...props }: BaseProps) {
  return (
    <div {...props} className={cn('max-w-6xl px-4 mx-auto', className)}>
      <Header />
      <main className="min-h-50-screen relative">{children}</main>
      <Footer />
    </div>
  );
}
