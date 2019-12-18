// This needs to be imported for the language to be changed on the page
import { TranslateModule} from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DataPage } from './data.page';




const routes: Routes = [
  {
    // Leave the path as '' so that the home.router.ts page functions correctly
    path: '',
    component: DataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // Imports the translation information for the page
    TranslateModule.forChild()
  ],
  declarations: [DataPage]
})
export class DataPageModule {}
