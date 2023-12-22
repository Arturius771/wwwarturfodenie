import { Assessment } from './assessment';
import { Book } from './book';
import { Project } from './project';

export interface Module extends Project {
  code?: string;
  assessments?: Array<Assessment>;
  result?: number | string;
  resources?: Array<Book>;
  software?: Array<Book>;
}
