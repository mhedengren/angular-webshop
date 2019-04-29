import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(data => {
      console.log(data);
    });
  }


}



