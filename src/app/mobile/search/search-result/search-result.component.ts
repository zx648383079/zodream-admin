import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/@theme/models/product';
import { ProductService } from 'src/app/@theme/services';

@Component({
  selector: 'zo-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  data: IProduct[] = [];

  keywords: string;

  constructor(
    private product: ProductService,
    private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.keywords = params['keywords'];
      this.onGo(1);
    });
  }

  onGo(page: number) {
    this.product.get().subscribe(data => {
      this.data = data.data;
    });
  }

}
