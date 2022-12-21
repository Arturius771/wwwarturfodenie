import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfResourceComponent } from './af-resource.component';

describe('AfResourceComponent', () => {
  let component: AfResourceComponent;
  let fixture: ComponentFixture<AfResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
