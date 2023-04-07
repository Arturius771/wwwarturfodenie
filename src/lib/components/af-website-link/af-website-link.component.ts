import { Component, Input, OnInit } from '@angular/core';
import { WebsiteLink } from '../../model/website-link';

@Component({
  selector: 'app-af-website-link',
  templateUrl: './af-website-link.component.html',
  styleUrls: ['./af-website-link.component.less'],
})
export class AfWebsiteLinkComponent implements OnInit {
  @Input() website!: WebsiteLink;

  ngOnInit() {
    this.setWebsiteTitleIfMissing();
  }

  private setWebsiteTitleIfMissing() {
    if (!this.website.name) {
      this.website.name = 'Website';
    }
  }
}
