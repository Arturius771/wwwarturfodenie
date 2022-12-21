import { Component, Input } from '@angular/core';
import { Book } from '../../model/book';
import { Project } from '../../model/project';

@Component({
  selector: 'app-af-project-capsule',
  templateUrl: './af-project-capsule.component.html',
  styleUrls: ['./af-project-capsule.component.less'],
})
export class AfProjectCapsuleComponent implements Project {
  @Input() title: string = 'Project Name';
  @Input() github?: string;

  @Input() website_name: string = 'Website';
  @Input() url?: string;
  @Input() description?: string;
  @Input() resource_material?: Array<Book>;
}
