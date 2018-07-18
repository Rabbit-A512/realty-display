import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHousesComponent } from './manage-houses.component';

describe('ManageHousesComponent', () => {
  let component: ManageHousesComponent;
  let fixture: ComponentFixture<ManageHousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
