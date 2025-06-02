import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSatComponent } from './team-sat.component';

describe('TeamSatComponent', () => {
  let component: TeamSatComponent;
  let fixture: ComponentFixture<TeamSatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
