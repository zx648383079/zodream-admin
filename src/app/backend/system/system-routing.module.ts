import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SystemComponent } from './system.component';
import { SettingComponent } from './setting/setting.component';
import { CacheComponent } from './cache/cache.component';
import { SitemapComponent } from './sitemap/sitemap.component';

const routes: Routes = [
    {
        path: '',
        component: SystemComponent,
        children: [
            {
                path: 'setting',
                component: SettingComponent,
            },
            {
                path: 'cache',
                component: CacheComponent,
            },
            {
                path: 'sitemap',
                component: SitemapComponent,
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class SystemRoutingModule {

}

export const systemRoutedComponents = [
    SystemComponent,
    SettingComponent,
    CacheComponent,
    SitemapComponent
];
