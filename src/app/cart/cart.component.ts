import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  movieInCart = [];
  constructor(private cartservice: CartService) {
  }

  ngOnInit() {

    this.cartservice.sendmovie.subscribe(movieInCart => {
    this.movieInCart = movieInCart;
    
    });

  }

}
