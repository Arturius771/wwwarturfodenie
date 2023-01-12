import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent {
  year = getYear();
}

function getYear(): number {
  var year: number = new Date().getFullYear();
  return (year = year >= 2021 ? year : 2022);
}
