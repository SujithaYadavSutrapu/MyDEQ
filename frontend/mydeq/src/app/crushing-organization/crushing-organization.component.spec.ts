import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushingOrganizationComponent } from './crushing-organization.component';

describe('CrushingOrganizationComponent', () => {
  let component: CrushingOrganizationComponent;
  let fixture: ComponentFixture<CrushingOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrushingOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrushingOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
