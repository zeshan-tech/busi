import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamCardComponent } from './our-team-card.component';

describe('OurTeamCardComponent', () => {
  let component: OurTeamCardComponent;
  let fixture: ComponentFixture<OurTeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurTeamCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
