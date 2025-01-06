'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

type ThemeValueType = 'light' | 'dark' | 'system';

const Themes = [
  {
    label: 'light',
    value: 'light',
  },
  {
    label: 'dark',
    value: 'dark',
  },
  {
    label: 'system',
    value: 'system',
  },
] as { label: string; value: ThemeValueType; shortcut: string }[];

export function ThemeToggler() {
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-10 h-10 p-0 rounded-full bg-natural">
          {theme === 'system' ? (
            <>{systemTheme === 'dark' ? <Icon icon="line-md:moon-to-sunny-outline-loop-transition" /> : <Icon icon="line-md:moon-loop" />}</>
          ) : (
            <>{theme === 'dark' ? <Icon icon="line-md:moon-to-sunny-outline-loop-transition" /> : <Icon icon="line-md:moon-loop" />}</>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-35 bg-natural">
        <DropdownMenuGroup>
          {Themes.map((theme) => (
            <DropdownMenuItem key={theme.value} onClick={() => setTheme(theme.value)} className="cursor-pointer capitalize">
              {theme.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
