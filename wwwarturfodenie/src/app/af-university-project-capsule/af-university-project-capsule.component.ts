import { Component, Input } from '@angular/core';
import { AfProjectCapsuleComponent } from '../af-project-capsule/af-project-capsule.component';
import { Dictionary } from '../lib/model/dictionary';

@Component({
  selector: 'app-af-university-projects-capsule',
  templateUrl: './af-university-project-capsule.component.html',
  styleUrls: ['./af-university-project-capsule.component.less'],
})
export class AfUniversityProjectCapsuleComponent extends AfProjectCapsuleComponent {
  @Input() module_code: String = 'CODE';
  @Input() assignments!: Dictionary<string>;
}
