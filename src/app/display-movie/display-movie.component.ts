import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.scss']
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie: IMovie;

   constructor() { }

   ngOnInit() {
  }


}
