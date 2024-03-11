import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushDustComponent } from './crush-dust.component';

describe('CrushDustComponent', () => {
  let component: CrushDustComponent;
  let fixture: ComponentFixture<CrushDustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrushDustComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrushDustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
