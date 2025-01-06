import { Base, ContentDisclaimer, MdxRenderer } from '@/components';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import formatDate from '@/lib/format-date';
import { allBlogs } from 'contentlayer/generated';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allBlogs.map((data) => ({
    slug: data._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) notFound();

  return (
    <>
      <ContentDisclaimer />
      <Base>
        <section className="space-y-12 pt-14 x-container mx-auto mb-10 lg:mb-20">
          <article className="flex items-start flex-col justify-between gap-5">
            <div className="x-container">
              <h4 className="mb-4 font-mono text-header">{blog.title}</h4>
              <p className="text-muted-foreground first-letter:text-primary space-x-2.5">
                {blog.tags.map((category) => (
                  <span key={category}>
                    <span className="text-primary">#</span>
                    {category}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-2 justify-between lg:items-center mt-2 md:mt-4 w-full">
              <div className="flex space-x-3 justify-start items-center">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/54196183" alt="Emmanuel Popoola" />
                  <AvatarFallback>EP</AvatarFallback>
                </Avatar>
                <span className="font-medium">Emmanuel Popoola</span>
              </div>
              <p className="text-muted-foreground dark:text-primary inline-flex items-center justify-start space-x-3">
                <span className="text-sm">{formatDate(blog.publishedAt).pretty}</span>
                <strong>•</strong>
                <span className="text-sm">{blog.readingTime?.text}</span>
              </p>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mt-4 mb-6">
              <Image src={blog.image} alt={blog.title} fill style={{ objectFit: 'cover' }} priority />
            </div>

            <div className="text-foreground leading-normal w-full prose mx-auto">
              <MdxRenderer mdxContent={blog.body.code} />
            </div>
          </article>
        </section>
      </Base>
    </>
  );
}
