import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendinglistComponent } from './trendinglist.component';

describe('TrendinglistComponent', () => {
  let component: TrendinglistComponent;
  let fixture: ComponentFixture<TrendinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
