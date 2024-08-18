import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalStatusCreateComponent } from './technical-status-create.component';

describe('TechnicalStatusCreateComponent', () => {
  let component: TechnicalStatusCreateComponent;
  let fixture: ComponentFixture<TechnicalStatusCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalStatusCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalStatusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
