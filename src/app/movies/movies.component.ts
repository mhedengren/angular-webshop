import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { IMovie } from "../interfaces/IMovie";
import { MockDataService } from "../services/mock-data.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.dataservice.getData().subscribe(data => {
      this.movies = data;
    });
  }
}
