import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import {DetailsPage} from '../details/details';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
detailsPage(){
   this.navCtrl.push(DetailsPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
