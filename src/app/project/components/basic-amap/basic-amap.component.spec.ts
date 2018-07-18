import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAmapComponent } from './basic-amap.component';

describe('BasicAmapComponent', () => {
  let component: BasicAmapComponent;
  let fixture: ComponentFixture<BasicAmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
