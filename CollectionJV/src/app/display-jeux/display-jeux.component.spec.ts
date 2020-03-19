import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJeuxComponent } from './display-jeux.component';

describe('DisplayJeuxComponent', () => {
  let component: DisplayJeuxComponent;
  let fixture: ComponentFixture<DisplayJeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayJeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
