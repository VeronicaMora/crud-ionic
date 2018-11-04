import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PetitionsProvider } from '../../providers/petitions/petitions';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  private id_note: number
  private title: string = ''
  private content: string = ''
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private petitions: PetitionsProvider) {
    const { id_note, title, content } = navParams.get('note');
    this.id_note = id_note
    this.title = title
    this.content = content
    console.log(title)
  }


  closeNote() {
    this.viewCtrl.dismiss();
  }

  removeNote(){
    this.petitions.removeNote(this.id_note).subscribe((data) => {
      this.viewCtrl.dismiss();
    }, (error) => {
      console.log(error)
    })
  }

  updateNote(){
    this.petitions.updateNote(this.id_note, this.title, this.content).subscribe((data) => {
      this.viewCtrl.dismiss();
    }, (error) => {
      console.log(error)
    })
  }

}
