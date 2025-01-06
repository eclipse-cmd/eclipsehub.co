import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { Icon as Iconify } from '@iconify/react';
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const toKebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
export const toQueryString = (obj: Record<string, any>, prefix = ''): string => {
  return Object.entries(obj)
    .filter(([_, value]) => value !== null && value !== undefined)
    .map(([key, value]) => {
      const newPrefix = prefix ? `${prefix}[${key}]` : key;

      if (typeof value === 'object' && value !== null) {
        return toQueryString(value, newPrefix);
      }

      return `${encodeURIComponent(newPrefix)}=${encodeURIComponent(value)}`;
    })
    .join('&');
};
