import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Platform4Component } from './platform4.component';

describe('Platform4Component', () => {
  let component: Platform4Component;
  let fixture: ComponentFixture<Platform4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Platform4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Platform4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
