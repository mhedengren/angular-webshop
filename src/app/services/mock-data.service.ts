import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { Observable, of } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

  order: IOrder = {id: 10, companyId: 2, created: '2011', createdBy: 'Melker', paymentMethod: 'Swish Jao', totalPrice: 199, status: 0, orderRows: [{productId:1, amount: 1}]}
  orders: IOrder[]= [{id: 10, companyId: 2, created: '2011', createdBy: 'Melker', paymentMethod: 'Swish Jao', totalPrice: 199, status: 0, orderRows: [{productId:1, amount: 1}]}]
  categories: [{"id":5,"name":"Action"},{"id":6,"name":"Thriller"},{"id":7,"name":"Comedy"},{"id":8,"name":"Sci-fi"}];

  movie: IMovie = {
    id: 1, name: 'The Dark Knight', description: 'abcd', price: 199,
    imageUrl: 'https://i.imgur.com/DpCHP0h.jpg',
    year: 2008, added: '2016-01-05T00:00:00',
    productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
  };

  movies: IMovie[] = [
    {
     id: 1, name: 'The Dark Knight', description: 'abcd', price: 199,
     imageUrl: 'https://i.imgur.com/DpCHP0h.jpg',
     year: 2008, added: '2016-01-05T00:00:00',
     productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
    },
    {
     id: 2, name: 'Ben Hur', description: 'abcd', price: 199,
     imageUrl: 'https://i.imgur.com/DpCHP0h.jpg',
     year: 2008, added: '2016-01-05T00:00:00',
     productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
    },
    {
     id: 3, name: 'Avengers Endgame', description: 'abcd', price: 199,
     imageUrl: 'https://i.imgur.com/DpCHP0h.jpg',
     year: 2008, added: '2016-01-05T00:00:00',
     productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
    },
    {
     id: 4, name: 'Star Wars', description: 'abcd', price: 199,
     imageUrl: 'https://i.imgur.com/DpCHP0h.jpg',
     year: 2008, added: '2016-01-05T00:00:00',
     productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
    },
 ];

  getData(): Observable<IMovie[]> {
    return of(this.movies);
  }
  getMovie(id): Observable<IMovie> {
    return of(this.movie);
  }
  postOrder(order): Observable<IOrder> {
    return of(this.order);
  }
  getOrders(): Observable<IOrder[]> {
    return of(this.orders);
  }
  deleteOrder(id): Observable<IOrder> {
    return of(this.order);
  }
  getCategory(): Observable<any[]> {
    return of(this.categories);
  }
 
  constructor() { }
}
