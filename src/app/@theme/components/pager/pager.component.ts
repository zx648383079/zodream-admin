import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'pager',
  styleUrls: ['./pager.scss'],
  templateUrl: './pager.html'
})
export class PagerComponent implements OnChanges {

  @Input() total: number = 1;
  @Input() index: number = 1;
  @Input() length: number = 8;

  @Output() go: EventEmitter<number> = new EventEmitter<number>();

  protected pages: Array<number>;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (this.total < 2) {
        return;
    }
    this.initPages();
  }

  paginate(page: number): boolean {
    if (page < 1) {
        page = 1;
    } else if (page > this.total) {
        page = this.total;
    }
    this.index = page;
    this.go.emit(this.index);
    this.initPages();
    return false;
  }

  getPage(): number {
    return this.index;
  }

  getPages(): Array<any> {
    return this.pages;
  }

  getLast(): number {
    return this.total;
  }

  initPages() {
    this.pages = [];
    if (this.total < 2) {
        return;
    }
    this.pages.push(1);
    let lastList = Math.floor(this.length / 2);
	let i = this.index - lastList;
	let length = this.index + lastList ;
    if (i < 2) {
        i = 2;
        length = i + this.length
    }
    if (length > this.total - 1) {
        length = this.total - 1;
        i = Math.max(2, length - this.length);
    }

    if (i > 2) {
        this.pages.push(0);
    }
    for (; i <= length; i ++) {
        this.pages.push(i);
    }
    if (length < this.total - 1) {
        this.pages.push(0);
    }
    this.pages.push(this.total);
  }
}
