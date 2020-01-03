import { NavParams, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qualitative-question',
  templateUrl: './qualitative-question.component.html',
  styleUrls: ['./qualitative-question.component.scss'],
})
export class QualitativeQuestionComponent implements OnInit {

  value: number;
  pop: PopoverController;

  constructor( navParams: NavParams) {
    this.pop = navParams.get('popoverController');
   }

  ngOnInit() {}

 close() {
   this.pop.dismiss();
 }

  submit(form) {
    this.value = form.value;
    this.close();
  }

}
