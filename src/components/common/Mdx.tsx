import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PrimaryLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(function PrimaryLink({ className, ...props }, ref) {
  return <a {...props} ref={ref} className={cn('text-white font-semibold underline underline-offset-4 hover:bg-gray-700', className)} />;
});

const CustomLink = ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  return isInternalLink ? <Link href={href} {...props} /> : <PrimaryLink target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents: Record<string, React.FC<any>> = {
  a: CustomLink,
  ul({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
    return <ul {...props} className={cn('ps-4 my-5', className)} />;
  },
  ol({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) {
    return <ol {...props} className={cn('ps-4 my-5', className)} />;
  },
  li({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
    return <li {...props} className={cn('my-2 list-disc marker:text-primary', className)} />;
  },
  h2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h2 {...props} className={cn('leading-[1.5em] text-2xl font-semibold mt-10 mb-3', className)} />;
  },
  h3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h3 {...props} className={cn('leading-[1.5em] text-xl font-semibold mt-6 mb-3', className)} />;
  },
  blockquote({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
    return <blockquote {...props} className={cn('text-white my-8 px-4 py-2 -mx-6 bg-gray-800 border-l-4 border-brown-600', className)} />;
  },
  Image({ ratio, alt, marginY = '4rem', fit, caption, maxWidth, ...rest }) {
    if (ratio) {
      return (
        <figure className={cn(`my-[${marginY}] space-x-4 space-y-3`)}>
          <AspectRatio ratio={ratio} className={cn(`relative max-w-[${maxWidth}]`)}>
            <Image alt={alt} className="img" style={{ overflow: 'visible', objectFit: fit }} {...rest} />
          </AspectRatio>
          {caption ? <figcaption className="text-sm text-center text-gray-400">{alt}</figcaption> : null}
        </figure>
      );
    }
    return (
      <figure className={cn(`my-[${marginY}] max-w-[${maxWidth}]`)}>
        <Image alt={alt} className="img" style={{ objectFit: fit }} {...rest} />
        {caption && <figcaption className="text-sm text-center text-gray-400">{alt}</figcaption>}
      </figure>
    );
  },
  hr(props) {
    return <hr {...props} className="my-[3em]" />;
  },
  code({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    if (typeof children === 'string') {
      return <code {...props} className={cn('text-primary rounded-sm', className)}>{`${children}`}</code>;
    }
    return <code {...props} className={className} />;
  },

  em({ className, children, ...props }: React.HTMLAttributes<HTMLEmbedElement>) {
    return <code {...props} className={cn('text-primary rounded-sm', className)}>{`${children}`}</code>;
  },
  strong({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return <strong {...props} className={cn('font-semibold text-white', className)} />;
  },
  table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
    return <table {...props} />;
  },
  LinkCover({ className, href, title, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
      <a href={href} target="_blank" {...props} className={cn('block relative', className)}>
        {props.children}
        {title ? <span className="px-1.5 rounded-md text-sm bg-[rgba(0,0,0,0.5)] text-white absolute bottom-3 left-4">{title}</span> : null}
      </a>
    );
  },
};

export default MDXComponents;
