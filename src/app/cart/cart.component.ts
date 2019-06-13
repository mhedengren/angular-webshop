import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICartItem } from '../interfaces/ICartItem';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { IOrder } from '../interfaces/IOrder';
import * as moment from 'moment';
import { IOrderRow } from '../interfaces/IOrderRow';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(
    private cartservice: CartService,
    private fb: FormBuilder,
    private dataservice: DataService
  ) {
    this.items = cartservice.getCart();
  }

  items: ICartItem[] = [];
  totalPrice: number;
  paymentMethods = ['Klarna', 'VISA / MasterCard', 'Paypal', 'Swish', 'Other'];
  orderRows: IOrderRow[] = [];

  // Form & Validation
  myForm = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    paymentControl: ['', Validators.required]
  });

  ngOnInit() {
    this.getTotalPrice();
  }

  orderComplete() {
    // Remapping id & amount for order rows interface included in IOrder.
    for (let i = 0; i < this.items.length; i++) {
      const productId = this.items[i].movie.id;
      const amount = this.items[i].amount;
      this.orderRows.push({ productId, amount });
    }

    const newOrder: IOrder = {
      id: 0,
      companyId: 2,
      created: moment()
        .add(2, 'hours')
        .format(),
      createdBy: this.myForm.get('email').value,
      paymentMethod: this.myForm.get('paymentControl').value,
      totalPrice: this.totalPrice,
      status: 0,
      orderRows: this.orderRows
    };

    // Will only post if items has been put in basket.
    if (this.items.length) {
      this.dataservice.postOrder(newOrder).subscribe();
      this.items = this.cartservice.emptyCart();
      this.totalPrice = 0;
    } else {
      return false;
    }
  }

  getTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.totalPrice += this.items[i].amount * this.items[i].movie.price;
    }
  }

  decreaseAmount(movie) {
    this.cartservice.removeMovie(movie);
    this.getTotalPrice();
  }

  increaseAmount(movie) {
    this.cartservice.addMovie(movie);
    this.getTotalPrice();
  }
}
