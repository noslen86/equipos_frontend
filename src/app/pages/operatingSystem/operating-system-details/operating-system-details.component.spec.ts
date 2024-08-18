import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemDetailsComponent } from './operating-system-details.component';

describe('OperatingSystemDetailsComponent', () => {
  let component: OperatingSystemDetailsComponent;
  let fixture: ComponentFixture<OperatingSystemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatingSystemDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatingSystemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
