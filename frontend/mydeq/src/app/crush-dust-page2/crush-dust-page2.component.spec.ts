import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushDustPage2Component } from './crush-dust-page2.component';

describe('CrushDustPage2Component', () => {
  let component: CrushDustPage2Component;
  let fixture: ComponentFixture<CrushDustPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrushDustPage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrushDustPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
