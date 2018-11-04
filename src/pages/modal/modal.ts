import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PetitionsProvider } from '../../providers/petitions/petitions';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private petitions: PetitionsProvider) {
  }

  ionViewDidLoad() {
  }

  closeNote() {
    this.viewCtrl.dismiss();
  }

  removeNote(id_note){
    this.petitions.removeNote(id_note).subscribe((data) => {
      console.log(data)
    }, (error) => {
      console.log(error)
    })
  }

  updateNote(){
    console.log("update")
  }




/*
openModal() {
  let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
  let myModal = this.modalCtrl.create(ModalPage, obj);
  myModal.present();
}



  email: string = this.navParams.get('email');




closeModal() {
  this.viewCtrl.dismiss(userProvidedData);
}



userName: string;

openModal() {
  let myModal = this.modalCtrl.create(ModalPage);

  myModal.onDidDismiss(data => {
    this.userName = data.userName;
  });

  myModal.present();
}
*/
}
