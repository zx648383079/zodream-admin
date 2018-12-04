import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/@theme/services/state.service';
import { SearchService } from 'src/app/@theme/services';

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

  constructor(private route: Router,
    private state: StateService, private searchService: SearchService) {

    }

  ngOnInit() {
    this.state.setModeState(false);
    this.searchService.keywords().subscribe(res => {
      this.hot_keywords = res;
    });
    this.history_list = this.searchService.getHistory();
  }

  onKeyUp($event) {
    if (!this.keywords || this.keywords.trim().length === 0) {
      return;
    }
    if ($event.which === 13) {
      this.addHistory(this.keywords);
      this.route.navigate(['/mobile/search-result'], {queryParams: {keywords: this.keywords}});
      return;
    }
    this.searchService.tips(this.keywords).subscribe(res => {
      this.tip_list = res;
    });
  }

  addHistory(keywords: string) {
    if (this.history_list.indexOf(keywords)) {
      return;
    }
    this.history_list.push(keywords);
    if (this.history_list.length > 8) {
      this.history_list.splice(8);
    }
    this.searchService.saveHistory(this.history_list);
  }

  tapKeyword(item: string) {
    this.route.navigate(['/mobile/search-result'], {queryParams: {keywords: item}});
  }

  tapClearHistory() {
    this.history_list = [];
    this.searchService.clearHistory();
  }
}
