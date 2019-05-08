import { Injectable, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {

  private messageSource = new BehaviorSubject<string>("default message");
  private cartSource = new BehaviorSubject<any>({id: 1, name: "The Dark Knight"});
  
  currentMessage = this.messageSource.asObservable();
  currentShoppingCart = this.cartSource.asObservable();

  constructor(){}

  changeMessage(message: string){
    this.messageSource.next(message)
  }
  updateCart(item: object){
    this.cartSource.next(item);
  }
}
