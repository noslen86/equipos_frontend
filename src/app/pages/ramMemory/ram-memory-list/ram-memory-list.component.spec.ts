import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamMemoryListComponent } from './ram-memory-list.component';

describe('RamMemoryListComponent', () => {
  let component: RamMemoryListComponent;
  let fixture: ComponentFixture<RamMemoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamMemoryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamMemoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
