import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  message: string;
  item: object;

  constructor(private cartservice: CartService) {}

  ngOnInit() {
  this.cartservice.currentMessage.subscribe(message => this.message = message)
  this.cartservice.currentShoppingCart.subscribe(item => this.item = item)
  }

  newMessage(){
    this.cartservice.changeMessage('Hello');
  }


}
