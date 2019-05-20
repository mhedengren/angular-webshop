import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';
import { MockDataService } from '../services/mock-data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  movie: IMovie;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataService,
    private cartservice: CartService,
    private router: Router ) {
  }

  addToCart(movie){
    this.cartservice.addMovie(movie);
    //localStorage.setItem('cart', JSON.stringify(movie));
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(pmap => {
          const id = pmap.get('id');

          this.dataservice.getMovie(id).subscribe(data => {
            this.movie = data;
        });
      });

      //Scroll to top on router change
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
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

  


