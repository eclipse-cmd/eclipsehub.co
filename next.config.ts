import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'vercel.com',
      'i.ytimg.com',
      'images.unsplash.com',
      'og-image-react-egghead.vercel.app',
      'images.ctfassets.net',
      'secure.meetupstatic.com',
      'cdn.changelog.com',
      'speakeasyjs.com',
      'avatars.githubusercontent.com',
      'opengraph.githubassets.com',
    ],
  },
};

export default withContentlayer(nextConfig);
