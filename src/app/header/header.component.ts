import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { ICartItem } from "../interfaces/ICartItem";
import { DataService } from "../services/data.service";
import { IMovie } from "../interfaces/IMovie";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private cartservice: CartService,
    private dataservice: DataService
  ) {}

  items: ICartItem[] = [];
  totalItemCount: number;
  moviesFromSearch: IMovie[] = [];
  searchValue: string;
  showSearchResult: boolean;

  hide() {
    this.showSearchResult = false;
  }

  // Running on keydown in header search input.
  getSearchResult() {
    this.showSearchResult = true;
    if (this.searchValue.length > 1) {
      this.dataservice.search(this.searchValue).subscribe(data => {
        this.moviesFromSearch = data;
      });
    } else {
      this.moviesFromSearch = [];
      this.showSearchResult = false;
    }
  }

  getTotalCount() {
    this.totalItemCount = this.items.reduce(
      (acc, { amount }) => acc + amount,
      0
    );
  }

  ngOnInit() {
    // Get cart array and total item count.
    this.cartservice.getCart();

    if (localStorage.getItem('cart-moviecore') == null) {
      localStorage.setItem('cart-moviecore', JSON.stringify(this.items));
    }
    this.items = JSON.parse(localStorage.getItem('cart-moviecore'));
    this.getTotalCount();

    this.cartservice.currentShoppingCart.subscribe(cart => {
      this.items = cart;
      this.getTotalCount();
    });
  }
}
