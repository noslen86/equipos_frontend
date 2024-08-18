import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardDiskCreateComponent } from './hard-disk-create.component';

describe('HardDiskCreateComponent', () => {
  let component: HardDiskCreateComponent;
  let fixture: ComponentFixture<HardDiskCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardDiskCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardDiskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
