import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MenuItem } from '../../components/menu-item/menu-item';
import { ThemeService } from '../../services';
import { IUser } from '../../models/user';

@Component({
  selector: 'zo-dark-layout',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.scss']
})
export class DarkComponent implements OnInit, OnDestroy {

  @Input() name = 'ZoDream Admin';

  @Input() menus: Array<MenuItem> = [];

  @Input() userMenus: Array<MenuItem> = [];

  @Input() user: IUser;

  public isExpand = false;
  public isSearch = false;
  public isDownMenu = false;

  constructor(private theme: ThemeService) {
    this.theme.addClass('dark-theme', 'full-theme');
  }

  ngOnInit() {
  }

  tapExpand() {
    this.isExpand = !this.isExpand;
  }

  ngOnDestroy() {
    this.theme.removeClass('dark-theme');
  }

  tapSearch() {
    this.isSearch = true;
  }

  tapCancelSearch() {
    this.isSearch = false;
  }

  tapDownMenu() {
    this.isDownMenu = !this.isDownMenu;
  }
}
