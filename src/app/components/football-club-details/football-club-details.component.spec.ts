import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballClubDetailsComponent } from './football-club-details.component';

describe('FootballClubDetailsComponent', () => {
  let component: FootballClubDetailsComponent;
  let fixture: ComponentFixture<FootballClubDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballClubDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballClubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
