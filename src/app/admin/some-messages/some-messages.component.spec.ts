import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeMessagesComponent } from './some-messages.component';

describe('SomeMessagesComponent', () => {
  let component: SomeMessagesComponent;
  let fixture: ComponentFixture<SomeMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
