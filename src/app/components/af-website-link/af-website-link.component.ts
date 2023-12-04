import { Component, Input } from '@angular/core';
import { WebsiteLink } from 'src/app/models/website-link';

@Component({
  selector: 'app-af-website-link',
  templateUrl: './af-website-link.component.html',
  styleUrls: ['./af-website-link.component.less'],
})
export class AfWebsiteLinkComponent {
  @Input() website!: WebsiteLink;
}
