import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesnodialogComponent } from './yesnodialog.component';

describe('YesnodialogComponent', () => {
  let component: YesnodialogComponent;
  let fixture: ComponentFixture<YesnodialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesnodialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesnodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
