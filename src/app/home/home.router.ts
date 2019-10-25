import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'map',
                children: [
                    {
                        path : '',
                        loadChildren: () => import('../pages/map/map.module').then(m => m.MapPageModule)
                    },
                    {
                        path: 'rpi',
                        loadChildren: () => import('../pages/rpi/rpi.module').then(m => m.RpiPageModule)
                    }

                ]
            },
            {
                path: 'data',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../pages/data/data.module').then(m => m.DataPageModule)
                    },
                    {
                        path: 'entry',
                        loadChildren: () => import('../pages/data-entry/data-entry.module').then(m => m.DataEntryPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/map',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRouter {}
