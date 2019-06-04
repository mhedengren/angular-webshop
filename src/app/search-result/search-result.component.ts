import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  moviesFromSearch: IMovie[];
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    // this.dataservice.search().subscribe(data => {
    //   this.moviesFromSearch = data;
    // });
  }
}