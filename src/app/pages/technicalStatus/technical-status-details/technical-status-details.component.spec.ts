import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalStatusDetailsComponent } from './technical-status-details.component';

describe('TechnicalStatusDetailsComponent', () => {
  let component: TechnicalStatusDetailsComponent;
  let fixture: ComponentFixture<TechnicalStatusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalStatusDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalStatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
