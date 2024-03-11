import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushDustPage3Component } from './crush-dust-page3.component';

describe('CrushDustPage3Component', () => {
  let component: CrushDustPage3Component;
  let fixture: ComponentFixture<CrushDustPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrushDustPage3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrushDustPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
