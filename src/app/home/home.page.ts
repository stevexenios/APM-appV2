// This page is simple as there is no real functionality for the app that is handled by this page directly
// all that is needed is this basic page that simply creates the page
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
