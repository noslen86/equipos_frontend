import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComputersComponent } from './report-computers.component';

describe('ReportComputersComponent', () => {
  let component: ReportComputersComponent;
  let fixture: ComponentFixture<ReportComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportComputersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
