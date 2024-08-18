import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardDiskEditComponent } from './hard-disk-edit.component';

describe('HardDiskEditComponent', () => {
  let component: HardDiskEditComponent;
  let fixture: ComponentFixture<HardDiskEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardDiskEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardDiskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
