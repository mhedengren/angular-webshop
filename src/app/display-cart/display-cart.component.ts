import { Component, OnInit, Input } from '@angular/core';
import { ICartItem } from '../interfaces/ICartItem';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.scss']
})
export class DisplayCartComponent implements OnInit {

  @Input() cartItem: ICartItem[];

  constructor() { }

  ngOnInit() {
  }

}
