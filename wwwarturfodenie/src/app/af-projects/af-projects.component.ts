import { Component } from '@angular/core';
import { Project } from '../lib/model/project';

@Component({
  selector: 'app-af-projects',
  templateUrl: './af-projects.component.html',
  styleUrls: ['./af-projects.component.less'],
})
export class AfProjectsComponent {
  afmaths: Project = {
    title: 'afmaths',
    description:
      'A python math library that outputs formatted instructions on how to compute mathematical formulas and expressions. Wish I named it afmaf.',
    url: 'https://pypi.org/project/afmaths/#description',
    website_name: 'pip install afmath',
    github: '',
  };
  arturfodenie: Project = {
    title: 'ArturFoden.ie',
    description:
      'Personal website, currently it is an Angular SPA (previously PHP MPA). Content changes according to current mood. Currently it is a portfolio website of sorts, but usually it is updated to implement something I find interesting.',
    url: 'https://pypi.org/project/afmaths/#description',
    website_name: 'Website',
    github: 'https://github.com/Arturius771/__wwwarturfodenie-website',
  };
  akamai: Project = {
    title: 'Akamai Frontend',
    description:
      'Worked on this project during my internship. Frontend project for an Angular SPA SaaS product.',
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
