import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OrderPage} from '../Order/Order';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
orderPage(){
  this.navCtrl.push(OrderPage);
}
}
