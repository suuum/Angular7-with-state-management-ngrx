import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballClubsComponent } from './football-clubs.component';

describe('FootballClubsComponent', () => {
  let component: FootballClubsComponent;
  let fixture: ComponentFixture<FootballClubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballClubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
