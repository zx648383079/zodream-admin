import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/@theme/models/product';
import { ProductService } from 'src/app/@theme/services';
import { StateService } from 'src/app/@theme/services/state.service';

@Component({
  selector: 'zo-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  data: IProduct[] = [];

  keywords: string;

  category = 0;

  brand = 0;

  has_more = true;

  page = 1;

  is_loading = false;

  constructor(
    private route: Router,
    private product: ProductService,
    private state: StateService,
    private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.state.setModeState(false);
    this.activeRoute.queryParams.subscribe(params => {
      this.keywords = params['keywords'];
      this.category = params['category'];
      this.brand = params['brand'];
      this.onGo(1);
    });
  }

  onGo(page: number) {
    if (this.is_loading) {
      return;
    }
    this.is_loading = true;
    this.product.get({
      keywords: this.keywords,
      category: this.category,
      brand: this.brand,
      page: page,
    }).subscribe(data => {
      this.data = page < 2 ? data.data : [].concat(this.data, data.data);
      this.page = page;
      this.has_more = !data.paging.more;
      this.is_loading = false;
    });
  }

  tapGoSearch() {
    this.route.navigateByUrl('/mobile/search');
  }

  onScrollEnd() {
    this.onGo(this.page + 1);
  }

}
