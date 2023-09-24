import { Component, Input } from '@angular/core';
import { Project } from 'src/lib/models/project';

@Component({
  selector: 'app-af-project-capsule',
  templateUrl: './af-project-capsule.component.html',
  styleUrls: ['./af-project-capsule.component.less'],
})
export class AfProjectCapsuleComponent {
  @Input() project!: Project;
}
