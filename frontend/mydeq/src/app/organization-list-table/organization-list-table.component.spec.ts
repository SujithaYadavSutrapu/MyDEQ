import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationListTableComponent } from './organization-list-table.component';

describe('OrganizationListTableComponent', () => {
  let component: OrganizationListTableComponent;
  let fixture: ComponentFixture<OrganizationListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
