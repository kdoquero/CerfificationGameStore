import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Platform2Component } from './platform2.component';

describe('Platform2Component', () => {
  let component: Platform2Component;
  let fixture: ComponentFixture<Platform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Platform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Platform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
