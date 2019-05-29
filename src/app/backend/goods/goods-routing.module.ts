import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GoodsComponent } from './goods.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: GoodsComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,
            },
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
export class GoodsRoutingModule {

}

export const goodsRoutedComponents = [
    GoodsComponent,
    ListComponent
];
