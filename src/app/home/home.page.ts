// This page is simple as there is no real functionality for the app that is handled by this page directly
// all that is needed is this basic page that simply creates the page
import { Component, OnInit } from '@angular/core';
import { ThemeService } from './../services/theme.service';


const themes = {
  good: {
    primary: '#00E400',
    light: '#53FF53',
    dark: '#006F00'
  },
  moderate: {
    primary: '#FFFF00',
    light: '#FFFF7F',
    dark: '#CFCF00'
  },
  ufsg: {
    primary: '#FF7E00',
    light: '#FF9730',
    dark: '#C26000'
  },
  unhealthy: {
    primary: '#FF0000',
    light: '#FF3D3D',
    dark: '#BD0000'
  },
  veryUnhealthy: {
    primary: '#8C03AD',
    light: '#CD00FF',
    dark: '#7D009C'
  },
  hazardous: {
    primary: '#800000 ',
    light: '#780707',
    dark: '#4f0000'
  }

};

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  aqi: number;

  constructor(private theme: ThemeService) {
    this.setAQI();
    if (this.aqi <= 50) {
      this.theme.setTheme(themes.good);
    } else if (this.aqi <= 100) {
      this.theme.setTheme(themes.moderate);
    } else if (this.aqi <= 150) {
      this.theme.setTheme(themes.ufsg);
    } else if (this.aqi <= 200) {
      this.theme.setTheme(themes.unhealthy);
    } else if (this.aqi <= 300) {
      this.theme.setTheme(themes.veryUnhealthy);
    } else {
      this.theme.setTheme(themes.hazardous);
    }}

  ngOnInit() {
  }

  setAQI() {
    this.aqi = Math.floor(Math.random() * 500);
  }

}
