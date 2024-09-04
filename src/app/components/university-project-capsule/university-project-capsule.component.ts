import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-university-projects-capsule',
  templateUrl: './university-project-capsule.component.html',
  styleUrls: ['./university-project-capsule.component.less'],
})
export class UniversityProjectCapsuleComponent {
  @Input() course!: Course;
}
