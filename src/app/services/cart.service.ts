import { Injectable, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {

  private messageSource = new BehaviorSubject<string>("default message");
  
  currentMessage = this.messageSource.asObservable();

  constructor(){}

  changeMessage(message: string){
    this.messageSource.next(message)
  }
}
