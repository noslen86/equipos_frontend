import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamMemoryDetailsComponent } from './ram-memory-details.component';

describe('RamMemoryDetailsComponent', () => {
  let component: RamMemoryDetailsComponent;
  let fixture: ComponentFixture<RamMemoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamMemoryDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamMemoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
