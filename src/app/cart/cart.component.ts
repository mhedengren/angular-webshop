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

  constructor(private cartservice: CartService) {}

  ngOnInit() {
  this.cartservice.currentShoppingCart.subscribe(items => this.items = items);

  }

}
