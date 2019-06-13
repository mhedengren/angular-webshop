import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayMovieComponent } from './display-movie.component';
import { MoviesComponent } from '../movies/movies.component';
import { Component } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { RouterTestingModule } from '@angular/router/testing';

describe('DisplayMovieComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMovieComponent, MoviesComponent, TestHostComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  @Component({
    selector: `host-component`,
    template: `
      <app-display-movie movie="movie"></app-display-movie>
    `
  })
  class TestHostComponent {
    movie: IMovie[];

    setInput(newInput: IMovie[]) {
      this.movie = newInput;
    }
  }
});
