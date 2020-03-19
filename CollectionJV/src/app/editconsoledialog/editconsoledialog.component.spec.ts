import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditconsoledialogComponent } from './editconsoledialog.component';

describe('EditconsoledialogComponent', () => {
  let component: EditconsoledialogComponent;
  let fixture: ComponentFixture<EditconsoledialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditconsoledialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditconsoledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
