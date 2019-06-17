import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  categories: any[] = [];
  constructor(private dataservice: DataService) {}

  addCategory() {
    // Loop through movies, pair product categoryId with category id.
    for (let i = 0; i < this.movies.length; i++) {
      for (let j = 0; j < this.movies[i].productCategory.length; j++) {
        for (let k = 0; k < this.categories.length; k++) {
          if (this.movies[i].productCategory[j].categoryId === this.categories[k].id) {
            this.movies[i].productCategory[j].category = this.categories[k].name + ' ';
          }
        }
      }
    }
  }

  ngOnInit() {
    this.dataservice.getData().subscribe(data => {
      this.movies = data;

      // Gets API-categories & matches corresponding categories with movies.
      this.dataservice.getCategory().subscribe(categories => {
        this.categories = categories;
        this.addCategory();
      });
    });
  }
}
