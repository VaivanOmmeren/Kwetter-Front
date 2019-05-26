import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetdialogComponent } from './tweetdialog.component';

describe('TweetdialogComponent', () => {
  let component: TweetdialogComponent;
  let fixture: ComponentFixture<TweetdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
