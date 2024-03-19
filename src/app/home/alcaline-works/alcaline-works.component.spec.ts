import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcalineWorksComponent } from './alcaline-works.component';

describe('AlcalineWorksComponent', () => {
  let component: AlcalineWorksComponent;
  let fixture: ComponentFixture<AlcalineWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlcalineWorksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlcalineWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
