import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { IOrder } from './IOrder';

export interface IDataService {
  getData(): Observable<IMovie[]>;
  getMovie(id: number): Observable<IMovie>;
  getOrders(): Observable<IOrder[]>;
  search(value): Observable<IMovie[]>;
  deleteOrder(id: number): Observable<IOrder>;
  postOrder(order: IOrder): Observable<IOrder>;
  getCategory(): Observable<any[]>;
}
