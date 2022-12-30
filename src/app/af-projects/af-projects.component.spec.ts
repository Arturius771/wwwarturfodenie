import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfProjectsComponent } from './af-projects.component';

describe('AfProjectsComponent', () => {
  let component: AfProjectsComponent;
  let fixture: ComponentFixture<AfProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
