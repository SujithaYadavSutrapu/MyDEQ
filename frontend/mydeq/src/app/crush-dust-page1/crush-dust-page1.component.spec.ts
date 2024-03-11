import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushDustPage1Component } from './crush-dust-page1.component';

describe('CrushDustPage1Component', () => {
  let component: CrushDustPage1Component;
  let fixture: ComponentFixture<CrushDustPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrushDustPage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrushDustPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
