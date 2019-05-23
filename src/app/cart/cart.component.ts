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
  items: ICartItem[];
  totalPrice: number;
  paymentMethods = ['Klarna', 'VISA/ MasterCard', 'Paypal', 'Swish', 'Other']

  myForm = this.fb.group({
    // Varje rad blir en FormControl
    name: ['', Validators.minLength(3)],
    // type: ['', Validators.required],
    // age: [0, Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required]) ],
    paymentControl: ['', Validators.required]
  });

  myFunction() {
    alert('success');
  }

  ngOnInit() {
  }

  decreaseAmount(movie){
    this.cartservice.removeMovie(movie);
  }
  increaseAmount(movie){
    this.cartservice.addMovie(movie);
  }
}