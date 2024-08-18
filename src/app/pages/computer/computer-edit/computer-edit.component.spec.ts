import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerEditComponent } from './computer-edit.component';

describe('ComputerEditComponent', () => {
  let component: ComputerEditComponent;
  let fixture: ComponentFixture<ComputerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
