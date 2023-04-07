import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-af-toggle-button',
  templateUrl: './af-toggle-button.component.html',
  styleUrls: ['./af-toggle-button.component.less'],
})
export class AfToggleButtonComponent {
  @Input() title = 'Button';
  @Input() content?: string;
  boolean = false;

  onClick() {
    this.boolean = !this.boolean;
  }
}
