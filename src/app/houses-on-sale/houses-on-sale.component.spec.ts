import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesOnSaleComponent } from './houses-on-sale.component';

describe('HousesOnSaleComponent', () => {
  let component: HousesOnSaleComponent;
  let fixture: ComponentFixture<HousesOnSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesOnSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesOnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
