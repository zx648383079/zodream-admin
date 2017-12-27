import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public menus: Array<any>;

    public currentMenu: any = {
        id: 0,
        parent_id: 0,
        name: null
    };

    constructor(
        private service: MenuService
    ) {
        this.service.getMenus().subscribe(res => {
            this.menus = res;
        });
    }

    ngOnInit() {
    }

    /**
     * selectTab
     */
    public selectTab($event) {
        this.currentMenu.type = $event.route;
    }

    public touchMenu(menu?: any, parent?: any) {
        this.currentMenu = {
            id: 0,
            parent_id: 0,
            type: 'url'
        };
        if (menu) {
            this.currentMenu.id = menu.id;
            this.currentMenu.name = menu.name;
            this.currentMenu.type = menu.type;
            switch (menu.type) {
                case 'url':
                    this.currentMenu.url = menu.content;
                    break;
                default:
                    break;
            }
        }
        if (parent) {
            this.currentMenu.parent_id = parent.id;
        }
    }

    public saveMenu() {
        if (!this.currentMenu.name) {
            return;
        }
        let menu: any = {
            name: this.currentMenu.name,
            id: this.currentMenu.id,
            parent_id: this.currentMenu.parent_id
        };
        switch (this.currentMenu.type) {
            case 'url':
                menu.content = this.currentMenu.url;
                break;
            default:
                break;
        }
        this.service.saveMenu(menu).subscribe(res => {
            menu = res.data;
            if (menu.parent_id < 1) {
                this.addMenu(menu, this.menus);
                return;
            }
            this.menus.forEach(item => {
                if (item.id === menu.parent_id) {
                    this.addMenu(menu, item.children);
                }
            });
        });
    }

    private addMenu(menu: any, parents: Array<any>) {
        let never = true;
        parents.forEach(item => {
            if (item.id === menu.id) {
                item = menu;
                return never = false;
            }
        });
        if (!never) {
            return;
        }
        parents.push(menu);
    }

}
