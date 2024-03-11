import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaduComponent } from './madu.component';

describe('MaduComponent', () => {
  let component: MaduComponent;
  let fixture: ComponentFixture<MaduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
