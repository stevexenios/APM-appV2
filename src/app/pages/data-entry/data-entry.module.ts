// Added so that the tranlsation service can work
import { TranslateModule } from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DataEntryPage } from './data-entry.page';



const routes: Routes = [
  {
    // Leave the path as '' so that the home.router.ts page functions correctly
    path: '',
    component: DataEntryPage
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
  declarations: [DataEntryPage]
})
export class DataEntryPageModule {}
