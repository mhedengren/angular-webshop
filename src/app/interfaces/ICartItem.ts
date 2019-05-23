import { IMovie } from './IMovie';

export interface ICartItem {
   movie: IMovie;
   amount: number;

}


export interface IOrderRow {
   productId: number;
   amount: number;

}

