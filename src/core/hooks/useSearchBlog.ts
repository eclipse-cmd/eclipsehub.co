import { getBlogTags } from '@/lib/content-layer-utils';
import search from '@/lib/match-sorter';
import { allBlogs, Blog } from 'contentlayer/generated';
import { useMemo } from 'react';
import { useSearchParams } from './useSearchParams';

function byDate(a: Blog, b: Blog) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

export function useSearchBlog() {
  const { setParams, searchString, addFilter, removeFilter, filterGroup, filters } = useSearchParams();

  const results = useMemo(() => {
    return search(allBlogs, ['title', 'description', 'tags', 'host'], searchString);
  }, [searchString]);

  const resultsByTags = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter((result) => result.tags.some((cat) => filters.includes(cat)));
  }, [results, filters]);

  return {
    isEmptyResult: results.length === 0,
    results: resultsByTags.sort(byDate),
    setParams,
    filterCategory: filterGroup,
    addTag: addFilter,
    removeTag: removeFilter,
    defaultValue: searchString || '',
    tags: getBlogTags(results),
    allTags: getBlogTags(),
    filters,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
}
