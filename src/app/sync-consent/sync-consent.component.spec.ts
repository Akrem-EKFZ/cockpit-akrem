import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncConsentComponent } from './sync-consent.component';

describe('SyncConsentComponent', () => {
  let component: SyncConsentComponent;
  let fixture: ComponentFixture<SyncConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyncConsentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SyncConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
