
// This page holds both the home page display which holds the tabs for the page that when clicked swap between
// pages.
// The other important thing that is held in this is the import for the router which is what controls the
// transition between all of the pages of the app.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomeRouter } from './home.router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRouter,
    TranslateModule.forChild()
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
