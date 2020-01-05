import { Component, OnInit } from '@angular/core';

// These imports added for the naviagation and translation services
import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from './../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

import { ThemeService } from './../../services/theme.service';





@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  aqi: number;
  threshold: boolean;
  value: number;

  constructor(public navCtrl: NavController, private translate: TranslateService,
              private popoverCtrl: PopoverController, private theme: ThemeService) {
  }

  // Once the fact that NgOnInit is not being called when the popover page is opened is fixed this creates
  // the dropdown list of languages for the user to choose from for translation
  async openLanguagePopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      showBackdrop: true,
      event: ev
    });
    return await popover.present();
  }

  ngOnInit() {
    this.aqi = 101;
    this.threshold = this.aqi >= 101;
  }

  // Sends the user to the page for displaying more detailed information about the air quality in their location
  // when clicked on the display
  public gotoRPi() {
    this.navCtrl.navigateForward('/home/map/rpi');
  }

  submit(form) {
    this.value = form.value;
    this.threshold = false;
  }

}
