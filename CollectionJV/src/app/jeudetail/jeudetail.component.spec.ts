import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeudetailComponent } from './jeudetail.component';

describe('JeudetailComponent', () => {
  let component: JeudetailComponent;
  let fixture: ComponentFixture<JeudetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeudetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeudetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
