'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXComponents from './Mdx';

type MdxRendererProps = {
  mdxContent: string;
};

export function MdxRenderer({ mdxContent }: MdxRendererProps) {
  const Component = useMDXComponent(mdxContent);

  return <Component components={MDXComponents} />;
}
