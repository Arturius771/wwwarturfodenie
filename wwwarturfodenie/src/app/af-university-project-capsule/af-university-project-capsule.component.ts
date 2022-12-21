import { Component, Input } from '@angular/core';
import { AfProjectCapsuleComponent } from '../af-project-capsule/af-project-capsule.component';
import { Assessment } from '../lib/model/assessment';

@Component({
  selector: 'app-af-university-projects-capsule',
  templateUrl: './af-university-project-capsule.component.html',
  styleUrls: ['./af-university-project-capsule.component.less'],
})
export class AfUniversityProjectCapsuleComponent extends AfProjectCapsuleComponent {
  @Input() module_code?: string;
  @Input() assessments?: Array<Assessment>;
  @Input() module_result: number | string = 'TBA';
}
