import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoledetailComponent } from './consoledetail.component';

describe('ConsoledetailComponent', () => {
  let component: ConsoledetailComponent;
  let fixture: ComponentFixture<ConsoledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
