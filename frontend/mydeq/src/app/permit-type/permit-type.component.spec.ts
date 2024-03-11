import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitTypeComponent } from './permit-type.component';

describe('PermitTypeComponent', () => {
  let component: PermitTypeComponent;
  let fixture: ComponentFixture<PermitTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermitTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermitTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
