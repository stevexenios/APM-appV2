import { Component, OnInit } from '@angular/core';

// These imports added for the naviagation and translation services
import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from './../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(public navCtrl: NavController, private translate: TranslateService, 
              private popoverCtrl: PopoverController) { }

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


  // Sends the user to the page for displaying more detailed information about the air quality in their location
  // when clicked on the display
  public gotoRPi() {
    this.navCtrl.navigateForward('/home/map/rpi');
  }

}
