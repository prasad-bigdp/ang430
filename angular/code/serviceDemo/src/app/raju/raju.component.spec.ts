import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajuComponent } from './raju.component';

describe('RajuComponent', () => {
  let component: RajuComponent;
  let fixture: ComponentFixture<RajuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RajuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
