import { AfProjectCapsuleComponent } from '../af-project-capsule/af-project-capsule.component';
import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-af-university-projects-capsule',
  templateUrl: './af-university-project-capsule.component.html',
  styleUrls: ['./af-university-project-capsule.component.less'],
})
export class AfUniversityProjectCapsuleComponent {
  @Input() course!: Course;
}
