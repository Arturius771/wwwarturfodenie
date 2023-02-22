import { Component, Input, OnInit } from '@angular/core';
import { WebsiteLink } from '../../model/website-link';

@Component({
  selector: 'app-af-website-link',
  templateUrl: './af-website-link.component.html',
  styleUrls: ['./af-website-link.component.less'],
})
export class AfWebsiteLinkComponent implements OnInit {
  @Input() websiteLink!: WebsiteLink;

  ngOnInit() {
    if (!this.websiteLink.website_name) {
      this.websiteLink.website_name = 'Website';
    }
  }
}
