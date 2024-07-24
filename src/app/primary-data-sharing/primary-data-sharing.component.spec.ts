import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDataSharingComponent } from './primary-data-sharing.component';

describe('PrimaryDataSharingComponent', () => {
  let component: PrimaryDataSharingComponent;
  let fixture: ComponentFixture<PrimaryDataSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryDataSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryDataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
