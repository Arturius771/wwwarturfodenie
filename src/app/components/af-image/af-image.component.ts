import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-af-image',
  templateUrl: './af-image.component.html',
  styleUrls: ['./af-image.component.less'],
})
export class AfImageComponent {
  @Input() imageSrc: any;
}
