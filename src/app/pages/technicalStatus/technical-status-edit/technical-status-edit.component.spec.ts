import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalStatusEditComponent } from './technical-status-edit.component';

describe('TechnicalStatusEditComponent', () => {
  let component: TechnicalStatusEditComponent;
  let fixture: ComponentFixture<TechnicalStatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalStatusEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
