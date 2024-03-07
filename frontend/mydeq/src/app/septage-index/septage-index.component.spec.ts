import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptageIndexComponent } from './septage-index.component';

describe('SeptageIndexComponent', () => {
  let component: SeptageIndexComponent;
  let fixture: ComponentFixture<SeptageIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptageIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeptageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
