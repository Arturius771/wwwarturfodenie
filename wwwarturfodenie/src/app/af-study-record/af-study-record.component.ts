import { Component } from '@angular/core';
import { Assessment } from '../lib/model/assessment';
import { Book } from '../lib/model/book';

@Component({
  selector: 'app-af-study-record',
  templateUrl: './af-study-record.component.html',
  styleUrls: ['./af-study-record.component.less'],
})
export class AfStudyRecordComponent {
  tm129_resources: Array<Book> = [
    { title: 'Microsoft Networking Essentials', author: 'Gibson, D.' },
    { title: 'iRobot', author: 'Asimov, I.' },
  ];
}
