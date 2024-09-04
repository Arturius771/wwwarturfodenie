import { Component, Input } from '@angular/core';
import { WebsiteLink } from 'src/app/models/website-link';

@Component({
  selector: 'app-website-link',
  templateUrl: './website-link.component.html',
  styleUrls: ['./website-link.component.less'],
})
export class WebsiteLinkComponent {
  @Input() website!: WebsiteLink;
}
