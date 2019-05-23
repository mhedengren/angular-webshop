import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICartItem } from '../interfaces/ICartItem';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartservice: CartService,
    private fb: FormBuilder) {
    this.items = cartservice.getCart();
    // this.cartservice.currentShoppingCart.subscribe( cart => {
    //   this.items = cart;
    // });
  }
  items: ICartItem[] = [];
  totalPrice: number;
  paymentMethods = ['Klarna', 'VISA/ MasterCard', 'Paypal', 'Swish', 'Other'];

  myForm = this.fb.group({
    // name: ['', Validators.minLength(3)],
    email: ['', Validators.compose([Validators.email, Validators.required]) ],
    paymentControl: ['', Validators.required]
  });

  orderComplete() {
    alert('success');
  }

  getTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.totalPrice += this.items[i].amount * this.items[i].movie.price;
      console.log(this.totalPrice);
      console.log(this.items);
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