import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StabilizerListComponent } from './stabilizer-list.component';

describe('StabilizerListComponent', () => {
  let component: StabilizerListComponent;
  let fixture: ComponentFixture<StabilizerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StabilizerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StabilizerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
