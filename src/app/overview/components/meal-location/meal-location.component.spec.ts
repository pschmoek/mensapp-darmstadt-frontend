import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealLocationComponent } from './meal-location.component';

describe('MealLocationComponent', () => {
  let component: MealLocationComponent;
  let fixture: ComponentFixture<MealLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
