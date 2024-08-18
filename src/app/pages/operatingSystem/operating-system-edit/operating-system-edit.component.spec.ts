import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemEditComponent } from './operating-system-edit.component';

describe('OperatingSystemEditComponent', () => {
  let component: OperatingSystemEditComponent;
  let fixture: ComponentFixture<OperatingSystemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatingSystemEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatingSystemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
