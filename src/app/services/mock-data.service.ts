import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { Observable, of } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {


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
 
  constructor() { }
}
