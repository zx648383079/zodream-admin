import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/@theme/services/state.service';
import { SearchService, ProductService } from 'src/app/@theme/services';
import { IProduct } from 'src/app/@theme/models/product';

@Component({
  selector: 'zo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keywords: string;

  hot_keywords: string[] = [];

  tip_list: string[] = [];

  history_list: string[] = [];

  search_mode = true;

  current_keywords: string;

  data: IProduct[] = [];

  category = 0;

  brand = 0;

  has_more = true;

  page = 1;

  is_loading = false;

  constructor(
    private route: Router,
    private searchService: SearchService,
    private product: ProductService,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.search_mode = true;
    this.activeRoute.queryParams.subscribe(params => {
      this.keywords = this.current_keywords = params['keywords'];
      this.category = params['category'];
      this.brand = params['brand'];
      if (this.current_keywords || this.category || this.brand) {
        this.onGo(1);
        this.search_mode = false;
      }
    });
    this.searchService.keywords().subscribe(res => {
      this.hot_keywords = res;
    });
    this.history_list = this.searchService.getHistory();
    if (!this.history_list || typeof this.history_list !== 'object') {
      this.history_list = [];
    }
  }

  onKeyUp($event) {
    if (!this.keywords || this.keywords.trim().length === 0) {
      return;
    }
    if ($event.which === 13) {
      this.addHistory(this.keywords);
      this.onGo(1);
      return;
    }
    this.searchService.tips(this.keywords).subscribe(res => {
      this.tip_list = res;
    });
  }

  addHistory(keywords: string) {
    if (this.history_list.indexOf(keywords) >= 0) {
      return;
    }
    this.history_list.push(keywords);
    if (this.history_list.length > 8) {
      this.history_list.splice(8);
    }
    this.searchService.saveHistory(this.history_list);
  }

  tapKeyword(item: string) {
    this.keywords = item;
    this.onGo(1);
  }

  tapClearSearch() {
    this.keywords = '';
    this.tip_list = [];
    this.search_mode = true;
  }

  tapClearHistory() {
    this.history_list = [];
    this.searchService.clearHistory();
  }

  onGo(page: number) {
    if (this.is_loading) {
      return;
    }
    this.search_mode = false;
    this.is_loading = true;
    this.current_keywords = this.keywords;
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
    this.search_mode = true;
  }

  tapBack() {
    if (!this.current_keywords && !this.category && !this.brand) {
      history.back();
      return;
    }
    this.search_mode = false;
    this.keywords = this.current_keywords;
  }

  onScrollEnd() {
    this.onGo(this.page + 1);
  }
}
