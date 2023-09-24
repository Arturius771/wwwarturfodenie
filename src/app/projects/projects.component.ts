import { Component } from '@angular/core';
import { Project } from '../../lib/models/project';

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
    link: {
      url: 'https://pypi.org/project/afmaths/#description',
      name: 'pip install afmaths',
    },
  };
  arturfodenie: Project = {
    title: 'ArturFoden.ie',
    description:
      'Personal website, currently it is an Angular frontend SPA (previously PHP MPA) on an Apache webserver and MySQL database (Thinking of moving to MongoDB). It will eventually be a MEAN project. Content changes according to current mood. Currently it is a portfolio website of sorts, but usually it is updated to implement something I find interesting.',
    link: {
      url: 'https://pypi.org/project/afmaths/#description',
    },
    github: {
      url: 'https://github.com/Arturius771/__wwwarturfodenie-website',
      name: 'GitHub',
    },
  };
  akamai: Project = {
    title: 'Akamai Frontend',
    description:
      'Worked on this project during my internship. Frontend project for an Angular SPA SaaS product. Took on duties such as sprint managers, release engineer, and upgrade engineer in addition to fixing bugs and implementing features in an Agile environment.',
  };
  volt: Project = {
    title: 'Volt Website',
    description: 'Volt Europa Tech Team developer. Vue TS framework.',
    link: { url: 'https://www.volteuropa.org/', name: 'Volt Website' },
  };
  lment: Project = {
    title: 'LMent',
    description:
      'WIP network analysis and logging project. Pronounced element.',
    link: { url: 'http://lment.ie/', name: 'Website' },
    github: {
      url: 'https://github.com/Arturius771/LMent',
      name: 'GitHub',
    },
  };
  phasmocrew: Project = {
    title: 'PhasmoCrew Website',
    description: '',
    link: { url: 'http://www.phasmocrew.org/#/home', name: 'Website' },
    github: {
      url: 'https://github.com/Arturius771/wwwphasmocreworg-website',
      name: 'GitHub',
    },
  };
}
