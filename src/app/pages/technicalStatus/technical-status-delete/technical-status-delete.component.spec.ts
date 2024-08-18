import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalStatusDeleteComponent } from './technical-status-delete.component';

describe('TechnicalStatusDeleteComponent', () => {
  let component: TechnicalStatusDeleteComponent;
  let fixture: ComponentFixture<TechnicalStatusDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalStatusDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalStatusDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
