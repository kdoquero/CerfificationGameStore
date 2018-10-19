import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Platform3Component } from './platform3.component';

describe('Platform3Component', () => {
  let component: Platform3Component;
  let fixture: ComponentFixture<Platform3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Platform3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Platform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
