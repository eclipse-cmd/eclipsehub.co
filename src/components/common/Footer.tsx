import { Iconify } from '@/lib/utils';
import Link from 'next/link';
import { SocialLinks } from '../app';

export function Footer() {
  return (
    <>
      <div className="pt-12 set-section">
        <h3 className="mb-2 text-header md:text-3xl">Emmanuel Popoola</h3>
        <p className="lg:max-w-[70%]">
          Proficient Software Engineer with a passion for crafting scalable, user-focused software solutions, leveraging expertise in modern frameworks, and efficient algorithms,
          to deliver impactful and high-quality applications.
        </p>
        <div className="grid grid-cols-2 gap-3 lg:gap-7 mt-7 md:max-w-[50%]">
          {SocialLinks.map((social) => (
            <a href={social.link} key={social.id} download={social.download} className="inline-flex items-center justify-start group w-fit" target="_blank">
              <Iconify icon={social.icon} className="me-2 text-primary" />
              <span className="underline transition group-hover:text-primary">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
      <footer className="flex flex-col items-center justify-center gap-2 py-4 mt-20 md:flex-row md:justify-between text-muted-foreground">
        <span className="order-2 md:order-1">
          All Rights Reserved &copy; <span className="font-mono">Eclipse</span> {new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
}
