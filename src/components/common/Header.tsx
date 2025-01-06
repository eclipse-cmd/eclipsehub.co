'use client';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer';
import { Icon } from '@iconify/react';
import { Link, ThemeToggler } from '../common';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const NavLinks = [
  {
    label: 'Work History',
    href: '/work-history',
    icon: 'carbon:ibm-cloud-projects',
  },
  {
    label: 'Snippets',
    href: '/code-snippets',
    icon: 'radix-icons:code',
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: 'jam:write',
  },
];

export function Header() {
  const currentPath = usePathname();

  return (
    <header className="flex items-center justify-between h-20 lg:py-8">
      <div className="lg:hidden">
        <Drawer direction="left" shouldScaleBackground fixed>
          <DrawerTrigger asChild>
            <button className="p-2">
              <Icon icon="bitcoin-icons:menu-outline" className="text-3xl" />
            </button>
          </DrawerTrigger>

          <DrawerContent className="rounded-none h-full max-w-xs bg-natural border-0 border-r-[1px]">
            <DrawerHeader className="flex items-center justify-end">
              <DrawerClose asChild>
                <button className="p-3">
                  <Icon icon="carbon:close-filled" className="text-2xl text-accent" />
                </button>
              </DrawerClose>
            </DrawerHeader>
            <div className="px-4 pb-0">
              <div className="flex flex-col items-start justify-center gap-1">
                {NavLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="flex items-center justify-start w-full py-3 space-x-2 font-normal no-underline capitalize">
                    <Icon icon={link.icon} className="text-accent" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <a href="/" className="no-underline">
        <span className="text-4xl font-extrabold font-calmy">Eclipse</span>
      </a>

      <div className="flex items-center justify-center gap-14">
        <div className="items-center justify-center hidden lg:flex lg:gap-8">
          {NavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn('group capitalize flex justify-start items-center space-x-2 font-normal rounded-md px-4 py-3', {
                'bg-primary dark:bg-natural x-shadow': currentPath.startsWith(link.href),
              })}
            >
              <Icon icon={link.icon} className="text-accent" />
              <span className={cn('group-hover:text-accent transition', { 'text-black dark:text-accent': currentPath.startsWith(link.href) })}>{link.label}</span>
            </Link>
          ))}
        </div>

        <ThemeToggler />
      </div>
    </header>
  );
}
