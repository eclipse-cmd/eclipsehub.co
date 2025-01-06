import { Base, ContentDisclaimer, MdxRenderer } from '@/components';
import { IconMapper } from '@/components/icons';
import { allSnippets } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allSnippets.map((data) => ({
    slug: data._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const snippet = allSnippets.find((snippet) => snippet.slug === slug);
  if (!snippet) notFound();

  const Icon = IconMapper[snippet.logo] || IconMapper['code'];

  return (
    <>
      <ContentDisclaimer />
      <Base>
        <section className="space-y-12 pt-14">
          <div className="flex items-start justify-between gap-5">
            <div className="x-container">
              <h4 className="mb-4 font-mono text-header">{snippet.title}</h4>
              <p className="mb-2 text-muted-foreground">{snippet.description}</p>
              <p className="text-muted-foreground first-letter:text-primary space-x-4">
                {snippet.categories?.map((category) => (
                  <span key={category}>
                    <span className="text-primary">#</span>
                    {category}
                  </span>
                ))}
              </p>
            </div>
            <span className="rounded-md">
              <Icon className="size-8 lg:size-12" />
            </span>
          </div>

          <div className="text-foreground leading-normal w-full prose mx-auto">
            <MdxRenderer mdxContent={snippet.body.code} />
          </div>
        </section>
      </Base>
    </>
  );
}
