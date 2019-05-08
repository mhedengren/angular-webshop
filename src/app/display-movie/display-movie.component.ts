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

   message: string;

   constructor(private cartservice: CartService) { }

   ngOnInit() {
     this.cartservice.currentMessage.subscribe(message => this.message = message);
  }

  addToCart(movie){
    this.cartservice.updateCart(movie);
    localStorage.setItem("cart", JSON.stringify(movie));
  }



}

