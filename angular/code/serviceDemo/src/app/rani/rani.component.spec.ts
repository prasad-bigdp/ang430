import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaniComponent } from './rani.component';

describe('RaniComponent', () => {
  let component: RaniComponent;
  let fixture: ComponentFixture<RaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
