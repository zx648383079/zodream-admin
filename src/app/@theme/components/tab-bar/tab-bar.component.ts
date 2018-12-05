import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zo-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  @Input() menus: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

}
