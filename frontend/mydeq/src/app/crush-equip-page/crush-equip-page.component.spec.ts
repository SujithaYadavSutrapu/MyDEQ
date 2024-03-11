import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushEquipPageComponent } from './crush-equip-page.component';

describe('CrushEquipPageComponent', () => {
  let component: CrushEquipPageComponent;
  let fixture: ComponentFixture<CrushEquipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrushEquipPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrushEquipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
