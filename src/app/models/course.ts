import { Module } from './module';
import { WebsiteLink } from './website-link';

export interface Course {
  title: string;
  institution: string;
  modules: Module[];
  link: WebsiteLink;
  result?: string;
}
