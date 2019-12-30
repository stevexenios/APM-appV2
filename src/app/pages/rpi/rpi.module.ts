import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RpiPage } from './rpi.page';

// Added so that the tranlsation service can work
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
    // Leave path as '' so that the routing can function correctly
    path: '',
    component: RpiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // Brings in the translation pages for updating the display of the page to be the correct language
    TranslateModule.forChild()
  ],
  declarations: [RpiPage]
})
export class RpiPageModule {}
