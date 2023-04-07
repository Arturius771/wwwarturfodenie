import { WebsiteLink } from './website-link';

export interface Project {
  title: string;
  description?: string;
  link?: WebsiteLink;
  github?: WebsiteLink;
}
