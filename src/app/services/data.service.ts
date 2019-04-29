import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<IMovie[]> {
  return this.httpClient.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
   }
}
