import React, { FC } from 'react';
import NextLink from 'next/link';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  hideArrow?: boolean;
}

export const Link: FC<LinkProps> = ({ href, children, className, hideArrow = false }) => {
  const isExternal = href.startsWith('http');

  return (
    <NextLink
      href={href}
      className={cn('decoration-accent-foreground text-foreground font-medium decoration-[3px]', className)}
      target={isExternal ? '_blank' : undefined}
    >
      {children}

      {isExternal && !hideArrow ? <Icon icon="ph:arrow-right-light" className="w-3 h-3 inline-block ml-1 mb-1" /> : null}
    </NextLink>
  );
};
