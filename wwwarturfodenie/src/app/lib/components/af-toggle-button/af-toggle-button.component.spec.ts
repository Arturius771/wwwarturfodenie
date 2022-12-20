import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfToggleButtonComponent } from './af-toggle-button.component';

describe('AfToggleButtonComponent', () => {
  let component: AfToggleButtonComponent;
  let fixture: ComponentFixture<AfToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
