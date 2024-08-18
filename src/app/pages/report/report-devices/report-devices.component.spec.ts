import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDevicesComponent } from './report-devices.component';

describe('ReportDevicesComponent', () => {
  let component: ReportDevicesComponent;
  let fixture: ComponentFixture<ReportDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportDevicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
