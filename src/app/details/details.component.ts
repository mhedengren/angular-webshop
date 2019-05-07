import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  movie: IMovie;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataService) {
  }

  // getMovieInfo(id) {
  //   this.dataservice.getMovie(id).subscribe(data => {
  //     this.movie = data;
  //     //console.log(this.movie); 
  //    });
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe(pmap => {
      const id = pmap.get('id');

      this.dataservice.getMovie(id).subscribe(data => {
        this.movie = data;
     // this.getMovieInfo(id);
    });
  });
  }
}


  // ngOnInit() {
  //   this.route.params.subscribe(myParams => {
  //     const id = myParams.id;

  //     this.dataservice.getMovie(id).subscribe(data => {
  //       this.movie = data;
  //       console.log(data);
  //     });
  // });

  


