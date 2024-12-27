import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import projects from '../../../../files/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent {
  projects: Project[] = projects;

  constructor() {}
}
