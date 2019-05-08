import { Injectable, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

@Injectable()
export class CartService {

  message = '';

 @Output() sendmovie: EventEmitter<any> = new EventEmitter();
 //@Output() sendmessage: EventEmitter<string> = new EventEmitter();


 getMovie(movie){
   console.log(movie);
   this.sendmovie.emit(movie);
 }

  //   add() {
  //   this.message = 'Hello Melker!';
  //   // this.sendmovie.emit({id: 1 , name: 'Melker'});
  //   this.sendmessage.emit(this.message);
  // }
}
