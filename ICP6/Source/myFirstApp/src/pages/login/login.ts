import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  reg()
  {
    this.navCtrl.push(RegisterPage);
  }
  home(){
    this.navCtrl.push(HomePage);
  }
}

