import { Component, Input } from '@angular/core';
import { Assessment } from '../../model/assessment';
import { Project } from '../../model/project';
import { AfProjectCapsuleComponent } from '../af-project-capsule/af-project-capsule.component';

@Component({
  selector: 'app-af-university-projects-capsule',
  templateUrl: './af-university-project-capsule.component.html',
  styleUrls: ['./af-university-project-capsule.component.less'],
})
export class AfUniversityProjectCapsuleComponent
  extends AfProjectCapsuleComponent
  implements Project
{
  @Input() module_code?: string;
  @Input() assessments?: Array<Assessment>;
  @Input() module_result: number | string = 'TBA';
}
