import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  constructor(public navCtrl: NavController) {

  }

  home(){
    this.navCtrl.setRoot(HomePage);  
  }
}
