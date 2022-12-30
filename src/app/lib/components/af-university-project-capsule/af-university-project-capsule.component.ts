import { Component, Input } from '@angular/core';
import { AfProjectCapsuleComponent } from '../af-project-capsule/af-project-capsule.component';
import { Module } from '../../model/module';

@Component({
  selector: 'app-af-university-projects-capsule',
  templateUrl: './af-university-project-capsule.component.html',
  styleUrls: ['./af-university-project-capsule.component.less'],
})
export class AfUniversityProjectCapsuleComponent extends AfProjectCapsuleComponent {
  @Input() module!: Module;
}
