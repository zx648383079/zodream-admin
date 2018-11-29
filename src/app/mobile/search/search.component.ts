import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/@theme/services/state.service';

@Component({
  selector: 'zo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keywords: string;

  constructor(private route: Router,
    private state: StateService) {

    }

  ngOnInit() {
    this.state.setModeState(false);
  }

  onKeyUp($event) {
    if ($event.which === 13) {
      this.route.navigateByUrl('/mobile/search-result', {queryParams: {keywords: this.keywords}});
    }
  }
}
