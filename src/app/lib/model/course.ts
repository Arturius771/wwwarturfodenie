import { Module } from './module';

export interface Course {
  name: string;
  institution: string;
  website: string;
  modules: Array<Module>;
}
