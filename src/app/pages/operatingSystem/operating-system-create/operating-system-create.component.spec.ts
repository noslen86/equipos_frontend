import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemCreateComponent } from './operating-system-create.component';

describe('OperatingSystemCreateComponent', () => {
  let component: OperatingSystemCreateComponent;
  let fixture: ComponentFixture<OperatingSystemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatingSystemCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatingSystemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
