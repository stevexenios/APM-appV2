// This is where the routing for the app is handled and is very important as it allows the tabular nature of
// the app. It is important that the path on the *.module.ts pages for the other pages be left as path: '' so
// so that the router can set that path and ensure the routing works.

import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

// Item make sure this matches the const for routes on all of the other *.module.ts
const routes: Routes = [
    {
        // Sets the home page that is created as the location that all other pages come from
        path: 'home',
        component: HomePage,
        children: [
            {
                // Item make sure that this path name is the same as the tab name set on home.page.html
                path: 'map',
                children: [
                    {
                        // This is loads the map page onto the home page marked by the blank path name
                        path : '',
                        // When adding pages it is imperative that this command form is used otherwise the
                        // navigation of the app will fall apart
                        loadChildren: () => import('../pages/map/map.module').then(m => m.MapPageModule)
                    },
                    {
                        // Having this page path follow the blank name and being within the 'map' path
                        // means that the rpi page is a child of the map page and is loaded over it but still on
                        // the home page.
                        path: 'rpi',
                        loadChildren: () => import('../pages/rpi/rpi.module').then(m => m.RpiPageModule)
                    }

                ]
            },
            // Same as above pages
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
    // Tells the app to go to the map page if it is given a path tha tis not valid, essentially setting the
    // map page as the default page of the app.
    {
        path: '',
        redirectTo: '/home/map',
        pathMatch: 'full'
    }
];


@NgModule({
    // Note that this is the RouterModule.forChild, versus the RouterModule.forRoot
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRouter {}
