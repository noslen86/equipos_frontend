import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardDiskDetailsComponent } from './hard-disk-details.component';

describe('HardDiskDetailsComponent', () => {
  let component: HardDiskDetailsComponent;
  let fixture: ComponentFixture<HardDiskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardDiskDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardDiskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
