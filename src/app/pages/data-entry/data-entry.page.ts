import { DataService } from './../../data/data.service';
import { Router } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from '../../pages/language-popover/language-popover.page';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.page.html',
  styleUrls: ['./data-entry.page.scss'],
})

export class DataEntryPage implements OnInit {

  constructor(public navCtrl: NavController, private translate: TranslateService, private popoverCtrl: PopoverController,
              private dataService: DataService, private router: Router) { }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  ngOnInit() {
  }

  addEntry(form) {
    this.dataService.addEntry(form.value).subscribe((res) => {
    });
    this.navCtrl.navigateBack('/home/data');
  }

}
