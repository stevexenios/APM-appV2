import { PopoverController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LanguagePopoverPage } from './../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(public navCtrl: NavController, private translate: TranslateService, private popoverCtrl: PopoverController) { }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  ngOnInit() {
  }

  public gotoRPi() {
    this.navCtrl.navigateForward('/home/map/rpi');
  }

}
