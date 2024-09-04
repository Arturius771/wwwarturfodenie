import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-capsule',
  templateUrl: './project-capsule.component.html',
  styleUrls: ['./project-capsule.component.less'],
})
export class ProjectCapsuleComponent {
  @Input() project!: Project;
}
