import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { FeedPage } from '../feed/feed';

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

  feed(){
    this.navCtrl.setRoot(FeedPage);  
  }
}
