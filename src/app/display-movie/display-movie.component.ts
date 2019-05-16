import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.scss']
})

export class DisplayMovieComponent implements OnInit {
   @Input() movie: IMovie;

   constructor(private cartservice: CartService) { }

   ngOnInit() {

  }

  addToCart(movie) {
    this.cartservice.addMovie(movie);
  }
  deleteFromCart(movie) {
    this.cartservice.removeMovie(movie);
  }

}

