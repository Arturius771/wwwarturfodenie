import { Project } from '../../model/project';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-af-university-projects-capsule',
  templateUrl: './af-university-project-capsule.component.html',
  styleUrls: ['./af-university-project-capsule.component.less'],
})
export class AfUniversityProjectCapsuleComponent {
  @Input() course!: Project;
}
