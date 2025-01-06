import formatDate from '@/lib/format-date';
import type { Blog } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

type BlogCardProps = { blog: Blog };

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`} className="flex flex-col p-4 space-y-4 rounded-md bg-card">
      <div className="h-[210px] w-full rounded-md overflow-hidden relative">
        <Image src={blog.image} fill className="object-cover" sizes="auto" alt={blog.slug || ''} />
      </div>
      <p className="text-muted-foreground dark:text-primary inline-flex items-center justify-start space-x-3 pt-4">
        <span className="text-sm">{formatDate(blog.publishedAt).pretty}</span>
        <strong>•</strong>
        <span className="text-sm">{blog.readingTime?.text}</span>
      </p>
      <h4 className="font-mono font-bold">{blog.title}</h4>
    </Link>
  );
}
