import { Assessment } from './assessment';
import { Book } from './book';
import { Project } from './project';

export interface Module extends Project {
  module_code?: string;
  assessments?: Array<Assessment>;
  module_result: number | string;
  module_resources?: Array<Book>;
  module_software?: Array<Book>;
}
