import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PetitionsProvider } from '../../providers/petitions/petitions';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  private title: string = ""
  private content: string = ""

  constructor(private navCtrl: NavController, private petitions: PetitionsProvider, private toastCtrl: ToastController) {
  }

  saveNote(){
    if(this.title != '' && this.content != ''){
      this.petitions.createNote(this.title, this.content).subscribe(() => {
        console.log("se guardo la nota");
        this.navCtrl.setRoot(HomePage);
      }, (error) => {
        console.log(error)
      })
    }
    else{
      this.presentToast('Aun no escribes nada');
    }
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
