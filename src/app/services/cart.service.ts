import { Injectable } from "@angular/core";
import { ICartItem } from "../interfaces/ICartItem";
import { Subject } from "rxjs";
import { IMovie } from "../interfaces/IMovie";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private cartSource = new Subject<ICartItem[]>();
  private cart: ICartItem[] = [];

  currentShoppingCart = this.cartSource.asObservable();

  totalItemCount: number;

  // totalItemCount=  new Subject<number>();
  // count = this.totalItemCount.asObservable();

  constructor() {}

  addMovie(movie: IMovie) {
    let foundMovie = false;

    for (let i = 0; i < this.cart.length; i++) {
      if (movie.id === this.cart[i].movie.id) {
        this.cart[i].amount++;
        foundMovie = true;
      }
    }

    if (!foundMovie) {
    this.cart.push({movie, amount: 1});
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSource.next(this.cart);

    this.totalItemCount = this.cart.reduce((acc, { amount }) => acc + amount, 0);
    console.log(this.totalItemCount);
  }

  removeMovie(movie: IMovie) {
    for (let i = 0; i < this.cart.length; i++) {
      if (movie.id === this.cart[i].movie.id) {
        this.cart[i].amount--;
    } if (this.cart[i].amount < 1) {
      this.cart.splice(i, 1);
    }
  }
   
    //console.log(this.cart);
    this.cartSource.next(this.cart);
}

  getCart(): ICartItem[] {
    return this.cart;
  }
}
