import { Component, Input } from '@angular/core';
import { Book } from '../../model/book';
import { Project } from '../../model/project';

@Component({
  selector: 'app-af-project-capsule',
  templateUrl: './af-project-capsule.component.html',
  styleUrls: ['./af-project-capsule.component.less'],
})
export class AfProjectCapsuleComponent {
  @Input() project!: Project;
}
