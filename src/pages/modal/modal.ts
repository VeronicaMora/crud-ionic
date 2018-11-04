import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PetitionsProvider } from '../../providers/petitions/petitions';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  private note: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private petitions: PetitionsProvider) {
    this.note = navParams.get('note');
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

}
