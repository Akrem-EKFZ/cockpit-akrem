import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDataSharingComponent } from './information-data-sharing.component';

describe('InformationDataSharingComponent', () => {
  let component: InformationDataSharingComponent;
  let fixture: ComponentFixture<InformationDataSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationDataSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationDataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
