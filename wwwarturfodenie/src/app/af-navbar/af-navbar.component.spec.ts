import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfNavbarComponent } from './af-navbar.component';

describe('AfNavbarComponent', () => {
  let component: AfNavbarComponent;
  let fixture: ComponentFixture<AfNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
