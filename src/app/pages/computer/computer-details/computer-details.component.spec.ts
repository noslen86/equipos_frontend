import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDetailsComponent } from './computer-details.component';

describe('ComputerDetailsComponent', () => {
  let component: ComputerDetailsComponent;
  let fixture: ComponentFixture<ComputerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
