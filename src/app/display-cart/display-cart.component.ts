import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interfaces/ICart';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.scss']
})
export class DisplayCartComponent implements OnInit {

  @Input() cartItem: ICart[];

  constructor() { }

  ngOnInit() {
  }

}
