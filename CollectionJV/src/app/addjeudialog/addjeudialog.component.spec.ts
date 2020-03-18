import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjeudialogComponent } from './addjeudialog.component';

describe('AddjeudialogComponent', () => {
  let component: AddjeudialogComponent;
  let fixture: ComponentFixture<AddjeudialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjeudialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjeudialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
