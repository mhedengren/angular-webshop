import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICartItem } from '../interfaces/ICartItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: ICartItem[];
  totalItemCount: number;

  constructor(private cartservice: CartService) {
  }

  ngOnInit() {

    this.cartservice.getCart();

    this.cartservice.currentShoppingCart.subscribe( cart => {
      this.items = cart;
      this.totalItemCount = this.items.reduce((acc, { amount }) => acc + amount, 0);
   });

  }

}
