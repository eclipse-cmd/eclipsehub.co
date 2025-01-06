import { allBlogs, allSnippets } from 'contentlayer/generated';

export const getSnippetCategories = (data = allSnippets) => [...new Set(data.flatMap((snippet) => snippet.categories))];

export const getBlogTags = (data = allBlogs) => Array.from(new Set(data.flatMap((blog) => blog.tags)));

export const allFeaturedBlogs = allBlogs.filter((blog) => blog.featured);
