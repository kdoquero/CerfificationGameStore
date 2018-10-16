import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessbarComponent } from './accessbar.component';

describe('AccessbarComponent', () => {
  let component: AccessbarComponent;
  let fixture: ComponentFixture<AccessbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
