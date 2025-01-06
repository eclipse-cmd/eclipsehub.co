'use client';

import { getSnippetCategories } from '@/lib/content-layer-utils';
import search from '@/lib/match-sorter';
import { allSnippets } from 'contentlayer/generated';
import { useMemo } from 'react';
import { useSearchParams } from './useSearchParams';

export const useSearchSnippets = () => {
  const { setParams, searchString, addFilter, removeFilter, filterGroup, filters } = useSearchParams();

  const results = useMemo(() => {
    return search(allSnippets, ['title', 'description', 'category'], searchString);
  }, [searchString]);

  const resultsByCategories = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter((result) => result.categories?.some((category) => filters.includes(category)));
  }, [results, filters]);

  return {
    isEmptyResult: results.length === 0,
    results: resultsByCategories,
    setParams,
    filterCategory: filterGroup,
    addCategory: addFilter,
    removeCategory: removeFilter,
    defaultValue: searchString || '',
    categories: getSnippetCategories(results),
    allCategories: getSnippetCategories(),
    filters,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
};
