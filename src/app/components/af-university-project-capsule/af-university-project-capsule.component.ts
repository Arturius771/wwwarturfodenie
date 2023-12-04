import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-af-university-projects-capsule',
  templateUrl: './af-university-project-capsule.component.html',
  styleUrls: ['./af-university-project-capsule.component.less'],
})
export class AfUniversityProjectCapsuleComponent {
  @Input() course!: Course;
}
