import { Component } from '@angular/core';
import { Project } from '../lib/model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent {
  afmaths: Project = {
    title: 'afmaths',
    description:
      'A python math library that outputs formatted instructions on how to compute mathematical formulas and expressions. Wish I named it afmaf.',
    url: 'https://pypi.org/project/afmaths/#description',
    website_name: 'pip install afmaths',
    github: '',
  };
  arturfodenie: Project = {
    title: 'ArturFoden.ie',
    description:
      'Personal website, currently it is an Angular frontend SPA (previously PHP MPA) on an Apache webserver and MySQL database (Thinking of moving to MongoDB). It will eventually be a MEAN project. Content changes according to current mood. Currently it is a portfolio website of sorts, but usually it is updated to implement something I find interesting.',
    url: 'https://pypi.org/project/afmaths/#description',
    website_name: 'Website',
    github: 'https://github.com/Arturius771/__wwwarturfodenie-website',
  };
  akamai: Project = {
    title: 'Akamai Frontend',
    description:
      'Worked on this project during my internship. Frontend project for an Angular SPA SaaS product. Took on duties such as sprint managers, release engineer, and upgrade engineer in addition to fixing bugs and implementing features in an Agile environment.',
    url: 'https://pypi.org/project/afmaths/#description',
    website_name: 'Website',
  };
  volt: Project = {
    title: 'Volt Website',
    description: 'Volt Europa Tech Team developer. Vue TS framework.',
    url: 'https://www.volteuropa.org/',
    website_name: 'Website',
  };
  lment: Project = {
    title: 'LMent',
    description:
      'WIP network analysis and logging project. Pronounced element.',
    url: 'http://lment.ie/',
    website_name: 'Website',
    github: 'https://github.com/Arturius771/LMent',
  };
  phasmocrew: Project = {
    title: 'PhasmoCrew Website',
    description: '',
    url: 'http://www.phasmocrew.org/#/home',
    website_name: 'Website',
    github: 'https://github.com/Arturius771/wwwphasmocreworg-website',
  };
}
