import { Component } from '@angular/core';

@Component({
  selector: 'app-af-footer',
  templateUrl: './af-footer.component.html',
  styleUrls: ['./af-footer.component.less'],
})
export class AfFooterComponent {
  year = getYear();
}

function getYear(): number {
  var year: number = new Date().getFullYear();
  return (year = year >= 2021 ? year : 2022);
}
