import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayMovieComponent } from './display-movie.component';
import { MoviesComponent } from '../movies/movies.component';
import { Component } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

describe('DisplayMovieComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMovieComponent, MoviesComponent, TestHostComponent ],
      imports: [RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });
  // it('should recieve 1 movie', () => {
  //   expect(testHostComponent.movie.length).toBe(0);
  //   testHostComponent.addToCart({
  //     id: 4, name: 'Star Wars', description: 'abcd', price: 199,
  //     imageUrl: 'https://i.imgur.com/DpCHP0h.jpg',
  //     year: 2008, added: '2016-01-05T00:00:00',
  //     productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
  //    });
  //   expect(testHostComponent.movie.length).toBe(1);
  // });

  @Component({
    selector: `host-component`,
    template: `<app-display-movie movie="movie"></app-display-movie>`
  })

  class TestHostComponent {
    movie: IMovie[];

    setInput(newInput: IMovie[]) {
      this.movie = newInput;
    }

  //  constructor(private cartservice: CartService) { }

  //  ngOnInit() {

  // }

  // addToCart(movie) {
  //   this.cartservice.updateCart(movie);
  // }



  }
    


});
