// These pages may become irrelevant if the other server methods I found work better as they do they attempt
// to do the same thing

import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot()
  ]
})
export class DataModule { }
