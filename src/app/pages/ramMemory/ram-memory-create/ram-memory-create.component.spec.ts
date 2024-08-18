import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamMemoryCreateComponent } from './ram-memory-create.component';

describe('RamMemoryCreateComponent', () => {
  let component: RamMemoryCreateComponent;
  let fixture: ComponentFixture<RamMemoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamMemoryCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamMemoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
