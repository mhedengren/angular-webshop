import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }
  getMovie(id): Observable<IMovie> {
    return this.httpClient.get<IMovie>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/' + id);
  }
  getOrders(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=2');
  }
  deleteOrder(id): Observable<IOrder[]> {
    return this.httpClient.delete<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + id);
  }
  postOrder(order: IOrder) {
    return this.httpClient.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/', order);
  }
}
