import { Component, OnInit } from '@angular/core';

// These imports added for the naviagation and translation services
import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from './../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

import { ThemeService } from './../../services/theme.service';
import { AqiService } from 'src/app/services/aqi.service';





@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  aqi: number;
  threshold: boolean;
  value: number;

  goodBool = false;
  modBool = false;
  usfgBool = false;
  unhealthBool = false;
  verBool = false;
  hazBool = false;


  constructor(public navCtrl: NavController, private translate: TranslateService,
              private popoverCtrl: PopoverController, private theme: ThemeService, private aqiServ: AqiService) {
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
    this.aqi = this.aqiServ.getAQI();
    this.setBool();
    this.threshold = this.aqi >= 101;
  }

  // Sends the user to the page for displaying more detailed information about the air quality in their location
  // when clicked on the display
  public gotoRPi() {
    this.navCtrl.navigateForward('/home/map/rpi');
  }

  setBool() {
    if (this.aqi <= 50) {
      this.goodBool = true;
    } else if (this.aqi <= 100) {
      this.modBool = true;
    } else if (this.aqi <= 150) {
      this.usfgBool = true;
    } else if (this.aqi <= 200) {
      this.unhealthBool = true;
    } else if (this.aqi <= 300) {
      this.verBool = true;
    } else {
      this.hazBool = true;
    }
  }

  submit(form) {
    this.value = form.value;
    this.threshold = false;
  }

}
