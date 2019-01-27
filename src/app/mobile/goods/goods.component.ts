import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/@theme/services';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/@theme/models/product';

@Component({
  selector: 'zo-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  goods: IProduct;

  constructor(
    private service: ProductService,
    private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.loadGoods(params.id);
    });
  }

  loadGoods(id: number) {
    this.service.info(id).subscribe(res => {
      this.goods =  res;
    });
  }

}
