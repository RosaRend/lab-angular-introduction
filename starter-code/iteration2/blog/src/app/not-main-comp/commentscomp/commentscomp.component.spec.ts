import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentscompComponent } from './commentscomp.component';

describe('CommentscompComponent', () => {
  let component: CommentscompComponent;
  let fixture: ComponentFixture<CommentscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
