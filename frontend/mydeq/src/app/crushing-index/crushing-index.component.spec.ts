import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushingIndexComponent } from './crushing-index.component';

describe('CrushingIndexComponent', () => {
  let component: CrushingIndexComponent;
  let fixture: ComponentFixture<CrushingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrushingIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrushingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
