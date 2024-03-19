import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcalineWorkCardComponent } from './alcaline-work-card.component';

describe('AlcalineWorkCardComponent', () => {
  let component: AlcalineWorkCardComponent;
  let fixture: ComponentFixture<AlcalineWorkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlcalineWorkCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlcalineWorkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
