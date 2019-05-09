import { Injectable, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {

  private cartSource = new BehaviorSubject<any[]>([]);
  private cart: IMovie[] = []
  
  currentShoppingCart = this.cartSource.asObservable();

  constructor(){}

    updateCart(movie: IMovie){
        this.cart.push(movie);
        this.cartSource.next(this.cart);
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }


}
