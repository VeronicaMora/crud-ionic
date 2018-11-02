import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PetitionsProvider } from '../../providers/petitions/petitions'

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  private title: string = ""
  private content: string = ""

  constructor(private navCtrl: NavController, private petitions: PetitionsProvider) {
  }

  saveNote(){
    this.petitions.createNote(this.title, this.content).subscribe(() => {
      console.log("se guardo la nota");
    this.navCtrl.setRoot(HomePage);
    }, (error) => {
      console.log(error)
    })
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
