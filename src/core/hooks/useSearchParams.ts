'use client';

import { addQuery, removeQuery } from '@/lib/next-router-utils';
import { useSearchParams as nextUseSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

function toArray(value: string | string[] | null) {
  const split = value?.toString().split(',') ?? [];
  if (split.length === 1) return split[0];
  return split;
}

export const useSearchParams = () => {
  const searchParams = nextUseSearchParams();

  const router = useRouter();
  const pathname = usePathname();
  const query = searchParams.entries();

  const q = searchParams.get('q');

  const searchString = decodeURI(q ?? '');
  const [filters, setFilters] = useState<string[]>([]);

  const setParams = useDebounce((value: string) => {
    value = value.replace(/\s+/g, ' ').trim();
    if (value === '') {
      removeQuery({ pathname, router, query }, 'q');
    } else {
      addQuery({ pathname, router, query }, 'q', encodeURI(value));
    }
  }, 400);

  const filterGroup = (tags: string[]) => {
    setFilters(tags);
  };

  const addFilter = (tag: string) => {
    if (filters.includes(tag)) return;
    setFilters((prev) => [...prev, tag]);
  };

  const removeFilter = (tag: string) => {
    setFilters((prev) => prev.filter((t) => t !== tag));
  };

  useEffect(() => {
    if (filters.length === 0) {
      removeQuery({ pathname, router, query }, 'filter');
    } else {
      addQuery({ pathname, router, query }, 'filter', filters);
    }
  }, [filters]);

  return {
    setParams,
    searchString,
    filters: toArray(searchParams.get('filter')),
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
    removeFilter,
    setFilters,
    addFilter,
    filterGroup,
  };
};
