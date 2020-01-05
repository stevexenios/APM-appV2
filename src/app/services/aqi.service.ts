import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AqiService {
  aqi: number;

  constructor() { }
  // tslint:disable-next-line: variable-name
  setAQI(number: number) {
    this.aqi = number;
  }

  getAQI() {
    return this.aqi;
  }
}
