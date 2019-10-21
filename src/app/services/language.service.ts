import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService, private storage: Storage ) { }

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

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
    } else if (this.selected === 'es'){
      return[
        {text: 'Inglés', value: 'en'},
        {text: 'Portugués', value: 'pt'},
        {text: 'Español', value: 'es'},
        {text: 'Francés', value: 'fr'},
      ];
    } else if (this.selected === 'fr'){
      return[
        {text: 'Anglais', value: 'en'},
        {text: 'Portugais ', value: 'pt'},
        {text: 'Espanol', value: 'es'},
        {text: 'Français  ', value: 'fr'},
      ];
    }
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
