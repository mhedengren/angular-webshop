import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { IOrder } from "../interfaces/IOrder";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  orders: IOrder[];
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.dataservice.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  deleteOrder(order) {
    this.dataservice.deleteOrder(order.id).subscribe();
    for (let i = 0; i < this.orders.length; i++) {
      if (order.id === this.orders[i].id) {
        this.orders.splice(i, 1);
      }
    }
  }
}
