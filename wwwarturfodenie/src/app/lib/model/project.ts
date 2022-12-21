import { Book } from './book';

export interface Project {
  title: string;
  github?: string;
  website_url?: string;
  website_name: string;
  description?: string;
  resource_material?: Array<Book>;
}
