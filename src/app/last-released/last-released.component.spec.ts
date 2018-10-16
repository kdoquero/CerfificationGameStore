import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReleasedComponent } from './last-released.component';

describe('LastReleasedComponent', () => {
  let component: LastReleasedComponent;
  let fixture: ComponentFixture<LastReleasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastReleasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
