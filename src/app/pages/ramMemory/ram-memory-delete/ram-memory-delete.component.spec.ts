import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamMemoryDeleteComponent } from './ram-memory-delete.component';

describe('RamMemoryDeleteComponent', () => {
  let component: RamMemoryDeleteComponent;
  let fixture: ComponentFixture<RamMemoryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamMemoryDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamMemoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
