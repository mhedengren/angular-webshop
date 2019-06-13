import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';
import { DisplayMovieComponent } from '../display-movie/display-movie.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent, DisplayMovieComponent],
      imports: [RouterTestingModule]
    })
      .overrideComponent(MoviesComponent, {
        set: {
          providers: [{ provide: DataService, useClass: MockDataService }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 4 movies', () => {
    expect(component.movies.length).toBe(4);
  });
});
