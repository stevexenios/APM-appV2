import { Storage } from '@ionic/storage';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import * as Color from 'color';

const defaults = {
  primary: '#3880ff',
};

function contrast(color, ratio = 0.8) {
  color = Color(color);
  return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
}

function CSSTextGenerator(colors) {
  colors = { ...defaults, ...colors };

  const {
    primary,
    dark,
    light,
    text
  } = colors;

  const shadeRatio = 0.1;
  const tintRatio = 0.1;

  return `
    --ion-color-base: ${light};
    --ion-color-contrast: ${dark};
    --text-color: ${text};

    --ion-color-primary: ${primary};
    --ion-color-primary-rgb: 56,128,255;
    --ion-color-primary-contrast: ${contrast(primary)};
    --ion-color-primary-contrast-rgb: 255,255,255;
    --ion-color-primary-shade:  ${Color(primary).darken(shadeRatio)};

`;
}


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  selected: any;

  constructor(@Inject(DOCUMENT) private document: Document, private storage: Storage) {
    storage.get('theme').then(cssText => { // <--- GET SAVED THEME})
      this.setGlobalCSS(cssText);
    });
  }

  // Overrride all global variables with a new theme
  setTheme(theme) {
    const cssText = CSSTextGenerator(theme);
    this.selected = theme;
    this.setGlobalCSS(cssText);
    this.storage.set('theme', cssText); // <--- SAVE THEME HERE
  }

  // Define a single CSS variable
  setVariable(name, value) {
    this.document.documentElement.style.setProperty(name, value);
  }

  private setGlobalCSS(css: string) {
    this.document.documentElement.style.cssText = css;
  }
}
