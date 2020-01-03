import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Path is left blank as it is set in the home.router.ts page that is imported with the HomePageModule
    // by doing this it tells the app to use the home.router.ts as the navigation for the app
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'scale-popover', loadChildren: './pages/scale-popover/scale-popover.module#ScalePopoverPageModule' }
];
@NgModule({
  imports: [
    // This loads all of the pages before hand so that they are ready for routing so that we can have the tabular
    // navigation scheme of the app
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
