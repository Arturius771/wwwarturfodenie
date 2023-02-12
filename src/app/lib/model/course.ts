import { Module } from './module';
import { Project } from './project';
import { WebsiteLink } from './website-link';

export interface Course {
  title: string;
  institution: string;
  modules: Module[];
  link: WebsiteLink;
}
