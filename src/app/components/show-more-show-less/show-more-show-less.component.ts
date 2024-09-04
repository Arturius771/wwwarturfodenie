import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-more-show-less',
  templateUrl: './show-more-show-less.component.html',
  styleUrls: ['./show-more-show-less.component.less'],
})
export class ShowMoreShowLess {
  @Input() text = 'Button';
  showContent = false;

  onClick() {
    this.showContent = !this.showContent;
  }
}
