import { Component, Input } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-af-resource',
  templateUrl: './af-resource.component.html',
  styleUrls: ['./af-resource.component.less'],
})
export class AfResourceComponent {
  @Input() resource!: Book;
}
