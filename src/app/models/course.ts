import { Institution } from './institution';
import { Module } from './module';

export interface Course {
  title: string;
  institution: Institution;
  modules: Module[];
  result?: string;
}
