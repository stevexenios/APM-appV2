import { Injectable } from '@angular/core';

// This allows the app to store the chosen value and update it as necessary
import { Storage } from '@ionic/storage';

// Prebuilt commands for the translation service that are used in this service are brought in
import { TranslateService } from '@ngx-translate/core';

// The key used by storage to get the correct language and update the selected value
const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // Blank variable to be updated by the service as the language is selected
  selected = '';

  constructor(private translate: TranslateService, private storage: Storage ) { }


  // This looks at the language that the user device is set to as it's default and sets the app to use this same
  // language as the default initially
  setInitialAppLanguage() {
    // tslint:disable-next-line: prefer-const
    let language = this.translate.getBrowserLang();
    // Make default language English if default language of user is not recognized by app.
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  // This returns the text and value associated with that text for display on the dropdown list to the user
  // this allows the language to be changed easily and the list of languages to translate itself as appropriate
  getLanguages() {
    if (this.selected === 'en') {
      return[
        {text: 'English', value: 'en'},
        {text: 'Portugese', value: 'pt'},
        {text: 'Spanish', value: 'es'},
        {text: 'French', value: 'fr'},
      ];
    } else if (this.selected === 'pt') {
      return[
        {text: 'Inglês', value: 'en'},
        {text: 'Português', value: 'pt'},
        {text: 'Espanhol  ', value: 'es'},
        {text: 'Francês', value: 'fr'},
      ];
    } else if (this.selected === 'es') {
      return[
        {text: 'Inglés', value: 'en'},
        {text: 'Portugués', value: 'pt'},
        {text: 'Español', value: 'es'},
        {text: 'Francés', value: 'fr'},
      ];
    } else if (this.selected === 'fr') {
      return[
        {text: 'Anglais', value: 'en'},
        {text: 'Portugais ', value: 'pt'},
        {text: 'Espanol', value: 'es'},
        {text: 'Français  ', value: 'fr'},
      ];
    }
  }

  // When the user selects a language this updates the translation to use that language and updates the stored
  // value to be the selected language so that the langaguge stays what was selected when the user returns to
  // the app and change page
  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
