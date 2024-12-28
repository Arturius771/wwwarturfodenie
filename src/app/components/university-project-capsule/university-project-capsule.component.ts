import { AfterContentInit, Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { WebsiteLink } from 'src/app/models/website-link';

@Component({
  selector: 'app-university-projects-capsule',
  templateUrl: './university-project-capsule.component.html',
  styleUrls: ['./university-project-capsule.component.less'],
})
export class UniversityProjectCapsuleComponent implements AfterContentInit {
  @Input() course!: Course;

  website!: WebsiteLink;

  ngAfterContentInit(): void {
    this.website = {
      url: this.course.institution.link.url,
      title: this.course.institution.name,
    };
  }
}
