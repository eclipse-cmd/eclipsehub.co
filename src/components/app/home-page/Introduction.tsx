import { Iconify } from '@/lib/utils';
import Image from 'next/image';
import { Tools } from './Tools';

export const SocialLinks = [
  {
    id: 1,
    label: 'LinkedIn',
    icon: 'simple-icons:linkedin',
    link: 'https://www.linkedin.com/in/emmanuel-popoola',
  },
  {
    id: 2,
    label: 'Github',
    icon: 'jam:github',
    link: 'https://github.com/eclipse-cmd',
  },
  {
    id: 3,
    label: 'Email',
    icon: 'eva:email-outline',
    link: 'mailto:emmanuelpopoola.cmd@gmail.com',
  },
  {
    id: 4,
    label: 'CV',
    icon: 'pepicons-pop:cv-circle',
    link: process.env.NEXT_PUBLIC_APP_URL + '/Emmanuel_Popoola_CV.pdf',
    download: 'Emmanuel_Popoola_CV.pdf',
  },
];

export function Introduction() {
  return (
    <>
      <div className="flex flex-col gap-5 pt-4 lg:flex-row">
        <div className="lg:w-6/12">
          <div className="inline-flex items-center justify-start">
            <span className="hidden lg:inline-block w-[90px] h-[90px] relative overflow-hidden rounded-full me-3">
              <Image src="/my-profile.jpg" alt="profile.png" fill className="object-cover" />
            </span>
            <h4 className="font-forward lg:text-7xl me-2">I Develop</h4>
          </div>
          <span className="text-primary font-forward lg:font-bold lg:text-7xl leading-[1.3]">Amazing Softwares</span>
        </div>

        <div className="flex flex-col space-y-4 lg:w-6/12">
          <p className="text-lead">
            Skilled software engineer with extensive experience in JavaScript/TypeScript, Java, and PHP, specializing in creating robust and efficient software solutions.
          </p>
          <div className="grid grid-cols-2 gap-3 lg:gap-7">
            {SocialLinks.map((social) => (
              <a href={social.link} key={social.id} download={social.download} className="inline-flex items-center justify-start group w-fit" target="_blank">
                <Iconify icon={social.icon} className="me-2 text-primary" />
                <span className="underline transition group-hover:text-primary">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="x-container">
        <h4 className="mb-4 text-header lg:max-w-2xl">Tools & Languages</h4>
        <p className="text-lead">
          Throughout my career, I have gained hands-on experience with a diverse range of software, tools, and frameworks that have been integral to driving efficiency and
          delivering results. Below is a selection of the technologies I have utilized:
        </p>
        <Tools />
      </div>
    </>
  );
}
