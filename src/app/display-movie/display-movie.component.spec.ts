import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMovieComponent } from './display-movie.component';
import { MoviesComponent } from '../movies/movies.component';

describe('DisplayMovieComponent', () => {
  let component: DisplayMovieComponent;
  let fixture: ComponentFixture<DisplayMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMovieComponent, MoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
