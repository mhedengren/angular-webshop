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
    this.cartservice.currentShoppingCart.subscribe( cart => {
      this.items = cart;
      console.log('hello');

   });
  }

  // decreaseAmount(movie){
  //   this.cartservice.removeMovie(movie);
  //   console.log(this.items);
  // }
  // increaseAmount(movie){
  //   this.cartservice.addMovie(movie);
  //   console.log(this.items);
  // }

  constructor(private cartservice: CartService) {
    
    console.log(this.items);
  }


}
