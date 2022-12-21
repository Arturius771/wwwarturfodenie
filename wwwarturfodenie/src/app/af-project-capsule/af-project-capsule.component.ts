import { Component, Input } from '@angular/core';
import { Book } from '../lib/model/book';

@Component({
  selector: 'app-af-project-capsule',
  templateUrl: './af-project-capsule.component.html',
  styleUrls: ['./af-project-capsule.component.less'],
})
export class AfProjectCapsuleComponent {
  @Input() title: string = 'Project Name';
  @Input() github?: string;
  @Input() website_address?: string;
  @Input() website_name: string = 'Website';
  @Input() description?: string;
  @Input() resource_material?: Array<Book>;
}
