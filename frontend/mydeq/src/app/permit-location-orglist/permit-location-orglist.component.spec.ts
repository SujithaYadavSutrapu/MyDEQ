import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitLocationOrglistComponent } from './permit-location-orglist.component';

describe('PermitLocationOrglistComponent', () => {
  let component: PermitLocationOrglistComponent;
  let fixture: ComponentFixture<PermitLocationOrglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermitLocationOrglistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermitLocationOrglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
