import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICartItem } from '../interfaces/ICartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: ICartItem[];

  ngOnInit() {
    console.log(this.items);
    }

  constructor(private cartservice: CartService
  ) {
    this.cartservice.currentShoppingCart.subscribe( cart => {
      this.items = Object.keys(cart).map( movieId => {
        return {
          movie: cart[movieId].movie,
          amount: cart[movieId].amount
        }
      });
    } );


  }
}
