import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  cadastro(){
    this.navCtrl.setRoot(CadastroPage);  
  }
}
