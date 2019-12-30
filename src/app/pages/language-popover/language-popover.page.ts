import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

// Needed so that the languages can be filled and when the user makes a selection the list of languages is
// updated
import { LanguageService } from '../../services/language.service';

@Component ({
  selector: 'app-language-popover',
  templateUrl: './language-popover.page.html',
  styleUrls: ['./language-popover.page.scss'],
})
export class LanguagePopoverPage implements OnInit {
  // Blank entries to store the list of languages and the currently selected value
  languages = [];
  selected = '';

  constructor(private languageService: LanguageService, private popoverCtrl: PopoverController) {
  }

  // For some reason this command is not being called, but when it is the values of the languages, mostly the
  // string values are updated based on the langage selected by the user
  ngOnInit() {
    console.log('Hello \n');
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }


  // When the user selects a language from the dropdown menu of the popover page the language for the app is
  // updated and the popover page is dismissed
  select(lng) {
    this.languageService.setLanguage(lng);
    this.popoverCtrl.dismiss();
  }
}
