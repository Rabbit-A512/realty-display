import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseThumbComponent } from './house-thumb.component';

describe('HouseThumbComponent', () => {
  let component: HouseThumbComponent;
  let fixture: ComponentFixture<HouseThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
