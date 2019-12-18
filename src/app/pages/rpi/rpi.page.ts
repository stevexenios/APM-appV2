// As we add in more functionality with the server this page will need to be updated heavily so that it properly
// reads in data from the server for display to the user
import { Component, OnInit } from '@angular/core';

// Imported for the translation service to function
import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from './../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rpi',
  templateUrl: './rpi.page.html',
  styleUrls: ['./rpi.page.scss'],
})
export class RpiPage implements OnInit {

  constructor( private translate: TranslateService, private popoverCtrl: PopoverController ) { }

  // Once the fact that NgOnInit is not being called when the popover page is opened is fixed this creates
  // the dropdown list of languages for the user to choose from for translation
  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  ngOnInit() {
  }

}
