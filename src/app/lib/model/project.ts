import { Module } from './module';
import { Url } from './url';

export interface Project {
  title: string;
  description?: string;
  url?: Url;
  github?: string;
  institution?: string;
  modules?: Array<Module>;
}
