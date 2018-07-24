import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMainCompComponent } from './not-main-comp.component';

describe('NotMainCompComponent', () => {
  let component: NotMainCompComponent;
  let fixture: ComponentFixture<NotMainCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotMainCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotMainCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
