import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardDiskDeleteComponent } from './hard-disk-delete.component';

describe('HardDiskDeleteComponent', () => {
  let component: HardDiskDeleteComponent;
  let fixture: ComponentFixture<HardDiskDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardDiskDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardDiskDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
