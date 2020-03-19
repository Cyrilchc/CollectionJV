import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjeudialogComponent } from './editjeudialog.component';

describe('EditjeudialogComponent', () => {
  let component: EditjeudialogComponent;
  let fixture: ComponentFixture<EditjeudialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjeudialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjeudialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
