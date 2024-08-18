import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuCreateComponent } from './cpu-create.component';

describe('CpuCreateComponent', () => {
  let component: CpuCreateComponent;
  let fixture: ComponentFixture<CpuCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpuCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
