import { Injectable, Output, EventEmitter } from '@angular/core';
import { ICartItem } from '../interfaces/ICartItem';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartSource = new BehaviorSubject<any[]>([]);
  private cart: ICartItem[] = [];
  currentShoppingCart = this.cartSource.asObservable();

  constructor() {}

    updateCart(movie) {
        this.cart.push(movie);
        this.cartSource.next(this.cart);
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }


}
