import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import siteConfig from './site.config';
import { toKebabCase } from './src/lib/utils';

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 300 }),
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  editUrl: {
    type: 'string',
    resolve: (doc) => `${siteConfig.repo.editUrl}/${doc._id}`,
  },
  params: {
    type: 'list',
    resolve: (doc) => doc._raw.flattenedPath.split('/'),
  },
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    featured: { type: 'boolean' },
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
  },
  computedFields: {
    ...computedFields,
    ogImageUrl: {
      type: 'string',
      resolve: (doc) => `${process.env.NEXT_PUBLIC_APP_URL}/static/images/og/${toKebabCase(doc.title)}.png`,
    },
  },
}));

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: 'code-snippets/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    logo: { type: 'string', required: true },
    categories: { type: 'list', of: { type: 'string', required: true } },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Snippet, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      // rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3', 'h4', 'h5', 'h6'],
          properties: { className: ['anchor'] },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
