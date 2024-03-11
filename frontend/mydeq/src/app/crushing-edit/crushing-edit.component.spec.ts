import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushingEditComponent } from './crushing-edit.component';

describe('CrushingEditComponent', () => {
  let component: CrushingEditComponent;
  let fixture: ComponentFixture<CrushingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrushingEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrushingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
