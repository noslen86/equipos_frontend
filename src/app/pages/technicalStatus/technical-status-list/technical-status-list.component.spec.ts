import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalStatusListComponent } from './technical-status-list.component';

describe('TechnicalStatusListComponent', () => {
  let component: TechnicalStatusListComponent;
  let fixture: ComponentFixture<TechnicalStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalStatusListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
