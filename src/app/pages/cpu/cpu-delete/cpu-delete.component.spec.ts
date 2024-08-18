import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuDeleteComponent } from './cpu-delete.component';

describe('CpuDeleteComponent', () => {
  let component: CpuDeleteComponent;
  let fixture: ComponentFixture<CpuDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpuDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpuDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
