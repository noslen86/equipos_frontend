import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemListComponent } from './operating-system-list.component';

describe('OperatingSystemListComponent', () => {
  let component: OperatingSystemListComponent;
  let fixture: ComponentFixture<OperatingSystemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatingSystemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatingSystemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
