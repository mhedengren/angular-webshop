import { Injectable, Output, EventEmitter } from '@angular/core';
import { ICartItem } from '../interfaces/ICartItem';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';


export interface Dictionary<T> { [key: number]: T; }

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartSource = new BehaviorSubject<Dictionary<ICartItem>>({});
  private cart: Dictionary<ICartItem> = {};

  currentShoppingCart = this.cartSource.asObservable();


  constructor() {}
  addMovie(movie: IMovie): void {
    if (this.cart[movie.id]) {
      // if it's already in cart then just increment it's count
      this.cart[movie.id].amount++;
    } else {
      this.cart[movie.id] = {
        movie,
        amount: 1
      };
    }
    this.cartSource.next(this.cart);
    //localStorage.setItem('cart', JSON.stringify(this.cart));
}

removeMovie(movie: IMovie): void {
  if (this.cart[movie.id]) {
    let amount = this.cart[movie.id].amount;

    if (amount === 1) {
      delete this.cart[movie.id];
    } else {
      this.cart[movie.id].amount--;
    }
    this.cartSource.next(this.cart);
  }
}



}
