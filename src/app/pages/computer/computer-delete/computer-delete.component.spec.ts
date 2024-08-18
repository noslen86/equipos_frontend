import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDeleteComponent } from './computer-delete.component';

describe('ComputerDeleteComponent', () => {
  let component: ComputerDeleteComponent;
  let fixture: ComponentFixture<ComputerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
