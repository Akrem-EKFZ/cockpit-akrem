import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDataSharingComponent } from './secondary-data-sharing.component';

describe('SecondaryDataSharingComponent', () => {
  let component: SecondaryDataSharingComponent;
  let fixture: ComponentFixture<SecondaryDataSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryDataSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryDataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
