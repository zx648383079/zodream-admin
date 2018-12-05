import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/@theme/models/cart';

@Component({
  selector: 'zo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  edit_mode = false;

  data: ICart[] = [];

  constructor() { }

  ngOnInit() {
  }

}
