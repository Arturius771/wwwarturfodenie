import { Module } from './module';
import { Project } from './project';

export interface Course {
  name: string;
  institution: string;
  website: string;
  modules: Array<Module>;
}
