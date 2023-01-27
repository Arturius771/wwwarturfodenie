import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfImageComponent } from './af-image.component';

describe('AfImageComponent', () => {
  let component: AfImageComponent;
  let fixture: ComponentFixture<AfImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
