import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAmapComponent } from './show-amap.component';

describe('ShowAmapComponent', () => {
  let component: ShowAmapComponent;
  let fixture: ComponentFixture<ShowAmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
