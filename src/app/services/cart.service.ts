import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/ICartItem';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {}

  private cartSource = new Subject<ICartItem[]>();
  private cart: ICartItem[] = [];

  currentShoppingCart = this.cartSource.asObservable();

  addMovie(movie: IMovie) {
    let foundMovie = false;

    // If the product already exists in cart, increase the amount of that product.
    for (let i = 0; i < this.cart.length; i++) {
      if (movie.id === this.cart[i].movie.id) {
        this.cart[i].amount++;
        foundMovie = true;
      }
    }

    // If it doesn't exist, push the new product in cart.
    if (!foundMovie) {
      this.cart.push({ movie, amount: 1 });
    }
    localStorage.setItem('cart-moviecore', JSON.stringify(this.cart));
    // Forward it to the subject.
    this.cartSource.next(this.cart);
  }

  // If the product already exists in cart, decrease the amount of that product.
  removeMovie(movie: IMovie) {
    for (let i = 0; i < this.cart.length; i++) {
      if (movie.id === this.cart[i].movie.id) {
        this.cart[i].amount--;
      }
      // Erases product from cart.
      if (this.cart[i].amount < 1) {
        this.cart.splice(i, 1);
      }
    }
    localStorage.setItem('cart-moviecore', JSON.stringify(this.cart));
    // Forward it to the subject.
    this.cartSource.next(this.cart);
  }

  emptyCart() {
    this.cart.length = 0;
    localStorage.setItem('cart-moviecore', JSON.stringify(this.cart));
    this.cartSource.next(this.cart);
    return this.cart;
  }

  getCart(): ICartItem[] {
    this.cart = JSON.parse(localStorage.getItem('cart-moviecore')) || [];
    return this.cart;
  }
}
