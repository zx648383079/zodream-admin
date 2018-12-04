import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/@theme/services';
import { ICategory } from 'src/app/@theme/models/category';
import { IHomeProduct } from 'src/app/@theme/models/product';
import { ProductService } from 'src/app/@theme/services/product.service';
import { AdService } from 'src/app/@theme/services/ad.service';
import { IAd } from 'src/app/@theme/models/ad';

@Component({
  selector: 'zo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: IAd[] = [];

  categories: ICategory[] = [];

  data: IHomeProduct;

  constructor(config: NgbCarouselConfig,
    private categoryService: CategoryService,
    private productService: ProductService,
    private adService: AdService) {
    config.showNavigationArrows = false;
    config.interval = 2000;
  }

  ngOnInit() {
    this.adService.banner().subscribe(res => {
      console.log(res);
      //this.banners = res;
    });
    this.categoryService.get().subscribe(res => {
      this.categories = res;
    });
    this.productService.home().subscribe(res => {
      this.data = res;
    });
  }

}
