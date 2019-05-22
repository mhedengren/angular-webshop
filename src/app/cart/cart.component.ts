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

  myForm = this.fb.group({
    // Varje rad blir en FormControl
    name: ['', Validators.minLength(3)],
    // type: ['', Validators.required],
    // age: [0, Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required]) ]
  });

  ngOnInit() {
  }

  decreaseAmount(movie){
    this.cartservice.removeMovie(movie);
  }
  increaseAmount(movie){
    this.cartservice.addMovie(movie);
  }



}



    // for (let i = 0; i < this.items.length; i++) {
    //    const sum = this.items[i].movie.price * this.items[i].amount;

    //    this.totalPrice += sum;
    //    console.log(sum);
    // }