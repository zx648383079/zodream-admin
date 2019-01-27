import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/@theme/models/cart';
import { CartService } from 'src/app/@theme/services/cart.service';

@Component({
  selector: 'zo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  edit_mode = false;

  data: ICart[] = [];

  constructor(private service: CartService) { }

  ngOnInit() {
    this.service.get().subscribe(res => {
      this.data = res;
    });
  }

}
