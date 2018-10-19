import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Platform1Component } from './platform1.component';

describe('Platform1Component', () => {
  let component: Platform1Component;
  let fixture: ComponentFixture<Platform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Platform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Platform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
