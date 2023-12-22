import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-af-show-more-show-less',
  templateUrl: './af-show-more-show-less.component.html',
  styleUrls: ['./af-show-more-show-less.component.less'],
})
export class AfShowMoreShowLess {
  @Input() text = 'Button';
  showContent = false;

  onClick() {
    this.showContent = !this.showContent;
  }
}
