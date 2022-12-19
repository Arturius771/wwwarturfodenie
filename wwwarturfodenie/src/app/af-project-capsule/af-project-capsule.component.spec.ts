import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfProjectCapsuleComponent } from './af-project-capsule.component';

describe('AfProjectCapsuleComponent', () => {
  let component: AfProjectCapsuleComponent;
  let fixture: ComponentFixture<AfProjectCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfProjectCapsuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfProjectCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
