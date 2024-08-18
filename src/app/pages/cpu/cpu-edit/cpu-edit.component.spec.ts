import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuEditComponent } from './cpu-edit.component';

describe('CpuEditComponent', () => {
  let component: CpuEditComponent;
  let fixture: ComponentFixture<CpuEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpuEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
