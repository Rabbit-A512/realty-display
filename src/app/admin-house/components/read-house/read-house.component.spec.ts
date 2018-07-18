import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadHouseComponent } from './read-house.component';

describe('ReadHouseComponent', () => {
  let component: ReadHouseComponent;
  let fixture: ComponentFixture<ReadHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
