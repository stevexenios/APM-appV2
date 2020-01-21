import { ThemeService } from './../../services/theme.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Imports needed for the translation and navigation control
import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from '../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

// Imports needed for the server communication, these may be changed
import { Observable } from 'rxjs';
import { DataService } from './../../data/data.service';



@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})

export class DataPage implements OnInit {
  // Creates a generic observable object for infomration to be read into
  // As this is part of the server functionality it may be changed
  data: Observable<any>;

  // Besides the navCtrl so that it can communicate between pages all of the imports that are added here are
  // private and all of them are needed for the services on the page
  constructor(public navCtrl: NavController, private translate: TranslateService, private popoverCtrl: PopoverController,
              private http: HttpClient, private router: Router, private dataService: DataService, private theme: ThemeService) {}

  // Once the fact that NgOnInit is not being called when the popover page is opened is fixed this creates
  // the dropdown list of languages for the user to choose from for translation
   async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      showBackdrop: true,
      event: ev
    });
    return await popover.present();
  }


  // This is supposed to look at the server and read in the data that has been put on there by the users
  // As this is related to server functionality it will probably be changed
  ngOnInit() {
    this.data = this.http.get(this.dataService.DATA_SERVER_ADDRESS);
    this.data.subscribe(data => {
      console.log('my data: ', data);
    });
  }

  // This command sends the user to the data entry page when they click the add entry button
  addEntry() {
    this.navCtrl.navigateForward('/home/data/entry');
  }

}
