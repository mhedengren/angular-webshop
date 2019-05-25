import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICartItem } from '../interfaces/ICartItem';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { IOrder } from '../interfaces/IOrder';
import * as moment from 'moment';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartservice: CartService,
    private fb: FormBuilder,
    private dataservice: DataService) {
    this.items = cartservice.getCart();
    // this.cartservice.currentShoppingCart.subscribe( cart => {
    //   this.items = cart;
    // });
  }
  items: ICartItem[] = [];
  orders: IOrder[];
  totalPrice: number;
  paymentMethods = ['Klarna', 'VISA / MasterCard', 'Paypal', 'Swish', 'Other'];

  myForm = this.fb.group({
    // name: ['', Validators.minLength(3)],
    email: ['', Validators.compose([Validators.email, Validators.required]) ],
    paymentControl: ['', Validators.required]
  });

  orderComplete() {

   const newOrder: IOrder = {
      id: 0,
      companyId: 13,
      created: moment().add(2, 'hours').format(),
      createdBy: this.myForm.get('email').value,
      paymentMethod: this.myForm.get('paymentControl').value,
      totalPrice: this.totalPrice,
      status: 0,
      orderRows: [{ productId: 76 , amount: 1 }]
    };
    // this.dataservice.postOrder(newOrder).subscribe();
    console.log(newOrder);
  }

  getTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.totalPrice += this.items[i].amount * this.items[i].movie.price;
    }
  }

  ngOnInit() {
    this.getTotalPrice();
  }

  decreaseAmount(movie){
    this.cartservice.removeMovie(movie);
    this.getTotalPrice();
  }
  increaseAmount(movie){
    this.cartservice.addMovie(movie);
    this.getTotalPrice();
  }

}
