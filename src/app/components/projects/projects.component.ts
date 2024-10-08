import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent {
  maths: Project = {
    title: 'afmaths',
    description:
      'A python math library that outputs formatted instructions on how to compute mathematical formulas and expressions. Wish I named it mafs.',
    link: {
      url: 'https://pypi.org/project/afmaths/#description',
      title: 'pip install afmaths',
    },
  };
  arturfodenie: Project = {
    title: 'ArturFoden.ie',
    description:
      'Personal website, currently it is an Angular frontend SPA (previously PHP MPA) on an Apache webserver and MySQL database. It will eventually be a MEAN project. Content changes according to current mood. Currently it is a portfolio website of sorts, but usually it is updated to implement something I find interesting.',
    github: {
      url: 'https://github.com/Arturius771/__wwwarturfodenie-website',
      title: 'GitHub',
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
    link: { url: 'https://www.volteuropa.org/', title: 'Volt Website' },
  };
  phasmocrew: Project = {
    title: 'PhasmoCrew Website',
    description: 'Website developer. Also working on our unnanounced game',
    link: { url: 'http://www.phasmocrew.org/#/home', title: 'Website' },
    github: {
      url: 'https://github.com/Arturius771/wwwphasmocreworg-website',
      title: 'GitHub',
    },
  };

  projects: Project[] = [
    this.maths,
    this.arturfodenie,
    this.akamai,
    this.volt,
    this.phasmocrew,
  ];
}
