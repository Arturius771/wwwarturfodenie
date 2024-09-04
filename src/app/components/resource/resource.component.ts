import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.less'],
})
export class ResourceComponent {
  @Input() resource!: Book;
}
