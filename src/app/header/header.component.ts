import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { ICartItem } from "../interfaces/ICartItem";
import { DataService } from "../services/data.service";
import { IMovie } from "../interfaces/IMovie";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
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

  // emptySearch() {
  //   this.searchValue = "";
  //   this.moviesFromSearch = [];
  // }

  // Running on keydown in header search input.
  getSearchResult() {
    if (this.searchValue.length > 1) {
      this.dataservice.search(this.searchValue).subscribe(data => {
        this.moviesFromSearch = data;
      });
    } else {
      this.moviesFromSearch = [];
    }
  }

  getTotalCount() {
    this.totalItemCount = this.items.reduce(
      (acc, { amount }) => acc + amount,
      0
    );
  }

  ngOnInit() {
    this.cartservice.getCart();
    this.items = JSON.parse(localStorage.getItem("cart"));
    this.getTotalCount();

    this.cartservice.currentShoppingCart.subscribe(cart => {
      this.items = cart;
      this.getTotalCount();
    });
  }
}
