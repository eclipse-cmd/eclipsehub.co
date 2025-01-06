export const tags = [
  'finance',
  'hiring',
  'career',
  'software',
  'design',
  'interview',
  'accessibility',
  'react',
  'vue',
  'jest',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
  'spring-boot',
];

const shared = {
  name: 'Emmanuel Popoola',
  repo: 'https://github.com/eclipse-cmd/eclipsehub.co',
  editUrl: 'https://github.com/eclipse-cmd/eclipsehub.co',
  website: 'https://eclipsehub.co',
  title:
    'Emmanuel Popoola (AKA "eclipse") - Software Engineer, Software Developer and Tech enthusiasts.',
  description:
    'Passionate software engineer, developer, and tech enthusiast dedicated to building innovative solutions and exploring the latest advancements in technology.',
  image: '',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - Emmanuel Popoola',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/eclipse-cmd',
    linkedin: 'https://www.linkedin.com/in/emmanuel-popoola',
    email: 'mailto:me@eclipsehub.co',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@emmie_cmd',
    site: '@emmie_cmd',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Passionate software engineer, developer, and tech enthusiast dedicated to building innovative solutions and exploring the latest advancements in technology.',
      },
    ],
  },
};

export default siteConfig;
