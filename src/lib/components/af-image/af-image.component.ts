import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-af-image',
  templateUrl: './af-image.component.html',
  styleUrls: ['./af-image.component.less'],
})
export class AfImageComponent {
  @Input() imageSrc: any;
}
