import type { IconMapper } from './components/icons';

export type iWorkHistory = {
  duration: string;
  company: string;
  role: string;
  companyUrl: string;
  description: string;
  overview?: string;
  location: string;
  tools: Array<keyof typeof IconMapper>;
  imgUrl: string;
};
