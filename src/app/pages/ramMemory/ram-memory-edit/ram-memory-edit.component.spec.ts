import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamMemoryEditComponent } from './ram-memory-edit.component';

describe('RamMemoryEditComponent', () => {
  let component: RamMemoryEditComponent;
  let fixture: ComponentFixture<RamMemoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamMemoryEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamMemoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
