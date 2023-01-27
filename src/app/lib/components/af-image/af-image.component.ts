import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-af-image',
  templateUrl: './af-image.component.html',
  styleUrls: ['./af-image.component.less'],
})
export class AfImageComponent {
  @Input() imageSource: any;
  @ViewChild('intersect')
  intersect!: ElementRef;
  @ViewChild('progress')
  progress!: ElementRef;
  @ViewChild('imageEl')
  imageEl!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  observerCallback(
    entries: string | any[],
    observer: { unobserve: (arg0: any) => void }
  ) {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      if (
        entry.isIntersecting &&
        entry.target.className === 'intersectContainer'
      ) {
        entry.target.querySelector('.lds-ring').className = 'hidden';
        this.progress.nativeElement.className = 'progress';
        let imgSrc = this.imageEl.nativeElement.getAttribute('data-imagesrc');

        this.http
          .get(imgSrc, {
            responseType: 'blob',
            reportProgress: true,
            observe: 'events',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          })
          .subscribe((event) => {
            if (event.type === HttpEventType.DownloadProgress) {
              const percentage = (100 / event.total!) * event.loaded;
              this.progress.nativeElement.value = percentage;
            }

            if (event.type === HttpEventType.Response) {
              entry.target.className = 'hidden';
              this.imageEl.nativeElement.src = window.URL.createObjectURL(
                event.body!
              );
              this.imageEl.nativeElement.className = '';
            }
          });

        observer.unobserve(entry.target);
      }
    }
  }

  ngAfterViewInit(): void {
    let options = {
      root: null,
      rootMargine: '0px',
      threshold: 1,
    };
    let observer = new IntersectionObserver(
      this.observerCallback.bind(this),
      options
    );
    observer.observe(this.intersect.nativeElement);
  }
}
