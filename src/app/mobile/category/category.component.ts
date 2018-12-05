import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/@theme/services';
import { ICategory } from 'src/app/@theme/models/category';

@Component({
  selector: 'zo-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: ICategory[] = [];

  category: ICategory;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.get().subscribe(res => {
      this.categories = res;
      if (res && res.length > 0) {
        this.tapSelected(res[0]);
      }
    });
  }

  tapSelected(item: ICategory) {
    this.category = item;
  }

}
