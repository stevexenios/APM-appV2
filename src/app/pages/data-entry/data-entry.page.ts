// This is needed for the current server funcionality and thus will likely be changed
import { DataService } from './../../data/data.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// This is the controls for the translator and navigation between pages
import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from '../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './../../services/theme.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.page.html',
  styleUrls: ['./data-entry.page.scss'],
})

export class DataEntryPage implements OnInit {

  constructor(public navCtrl: NavController, private translate: TranslateService, private popoverCtrl: PopoverController,
              private dataService: DataService, private router: Router, private theme: ThemeService) { }


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
    this.theme.setTheme(this.theme.selected);
  }

  // This command sends the information from the form to the server and then sends the user back to the data
  // display page. As this is attached to the server functionality it will likely be changed.
  addEntry(form) {
    this.dataService.addEntry(form.value).subscribe((res) => {
    });
    this.navCtrl.navigateBack('/home/data');
  }

}
