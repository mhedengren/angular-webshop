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
 
  }

  decreaseAmount(movie){
    this.cartservice.removeMovie(movie);
  }
  increaseAmount(movie){
    this.cartservice.addMovie(movie);
  }

  constructor(private cartservice: CartService) {
    this.items = cartservice.getCart();

    this.cartservice.currentShoppingCart.subscribe( cart => {
      this.items = cart;
      // console.log(this.items);
   });
  }


}
