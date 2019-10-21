import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LanguagePopoverPage } from './../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rpi',
  templateUrl: './rpi.page.html',
  styleUrls: ['./rpi.page.scss'],
})
export class RpiPage implements OnInit {

  constructor( private translate: TranslateService, private popoverCtrl: PopoverController ) { }

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
