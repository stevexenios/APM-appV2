import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { LanguagePopoverPage } from '../../pages/language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './../../data/data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})

export class DataPage implements OnInit {
  data: Observable<any>;

  constructor(public navCtrl: NavController, private translate: TranslateService, private popoverCtrl: PopoverController,
              private http: HttpClient, private router: Router, private dataService: DataService) {}

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  ngOnInit() {
    this.data = this.http.get(this.dataService.DATA_SERVER_ADDRESS);
    this.data.subscribe(data => {
      console.log('my data: ', data);
    });
  }

  addEntry() {
    this.navCtrl.navigateForward('/home/data/entry');
  }

}
