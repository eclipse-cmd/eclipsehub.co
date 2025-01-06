import { IconMapper } from '@/components/icons';
import type { Snippet } from 'contentlayer/generated';
import Link from 'next/link';

type SnippetsCardProps = { snippet: Snippet };

export function SnippetsCard({ snippet }: SnippetsCardProps) {
  const Icon = IconMapper[snippet.logo] || IconMapper['code'];

  return (
    <Link href={`/code-snippets/${snippet.slug}`} className="inline-block p-6 space-y-4 rounded-md bg-card">
      <span className="inline-block rounded-md">{Icon ? <Icon className="size-12" /> : null}</span>
      <h5 className="font-mono text-lg">{snippet.title}</h5>
      <p className="text-muted-foreground">{snippet.description}</p>
    </Link>
  );
}
