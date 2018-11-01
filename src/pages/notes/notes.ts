import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  items=[];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }

  saveNote(){
    console.log("se guardo la nota");
    this.navCtrl.setRoot(HomePage);
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
