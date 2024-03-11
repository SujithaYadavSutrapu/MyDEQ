import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressOverlayComponent } from './address-overlay.component';

describe('AddressOverlayComponent', () => {
  let component: AddressOverlayComponent;
  let fixture: ComponentFixture<AddressOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
