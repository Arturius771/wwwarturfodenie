import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';
import courses from '../../../../files/courses.json';

// Example module:
// tm111: Module = {
//   title: 'Introduction to Computing and Information Technology 1',
//   description: 'IT fundamentals, programming, and networking.',
//   url: 'https://www.open.ac.uk/courses/modules/tm111',
//   github: '',
//
//   code: 'TM111',
//   assessments: Assessment[],
//   result: 'Distinction',
//   resources: Book[],
//   software: Book[],
// };

@Component({
  selector: 'app-study-record',
  templateUrl: './study-record.component.html',
  styleUrls: ['./study-record.component.less'],
})
export class StudyRecordComponent {
  courses: Course[] = courses;

  constructor() {}
}
