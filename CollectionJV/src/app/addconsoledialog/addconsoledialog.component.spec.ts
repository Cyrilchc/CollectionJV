import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconsoledialogComponent } from './addconsoledialog.component';

describe('AddconsoledialogComponent', () => {
  let component: AddconsoledialogComponent;
  let fixture: ComponentFixture<AddconsoledialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconsoledialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconsoledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
