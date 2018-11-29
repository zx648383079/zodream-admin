import { Component, OnInit, Input, Inject, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MenuItem } from '../../components/menu-item/menu-item';
import { ThemeService } from '../../services';

@Component({
  selector: 'zo-dark-layout',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.scss']
})
export class DarkComponent implements OnInit, OnDestroy {

  @Input() name = 'ZoDream Admin';

  @Input() menus: Array<MenuItem> = [];

  isExpand = false;

  constructor(private theme: ThemeService) {
    this.theme.addClass('dark-theme');
  }

  ngOnInit() {
  }

  tapExpand() {
    this.isExpand = !this.isExpand;
  }

  ngOnDestroy() {
    this.theme.removeClass('dark-theme');
  }

}
