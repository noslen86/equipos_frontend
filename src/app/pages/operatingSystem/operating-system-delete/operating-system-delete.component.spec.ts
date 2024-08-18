import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemDeleteComponent } from './operating-system-delete.component';

describe('OperatingSystemDeleteComponent', () => {
  let component: OperatingSystemDeleteComponent;
  let fixture: ComponentFixture<OperatingSystemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatingSystemDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatingSystemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
