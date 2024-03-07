import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptageEditComponent } from './septage-edit.component';

describe('SeptageEditComponent', () => {
  let component: SeptageEditComponent;
  let fixture: ComponentFixture<SeptageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeptageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
