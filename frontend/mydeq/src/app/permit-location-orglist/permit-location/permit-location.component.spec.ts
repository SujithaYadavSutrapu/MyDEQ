import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitLocationComponent } from './permit-location.component';

describe('PermitLocationComponent', () => {
  let component: PermitLocationComponent;
  let fixture: ComponentFixture<PermitLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermitLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermitLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
