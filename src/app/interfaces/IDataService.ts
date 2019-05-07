import { Observable } from 'rxjs';
import { IMovie } from './IMovie';

export interface IDataService {
  getData(): Observable<IMovie[]>;
  getMovie(id: number): Observable<IMovie>;
}
