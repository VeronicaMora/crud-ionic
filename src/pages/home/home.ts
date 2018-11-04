import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesPage } from '../notes/notes';
import { PetitionsProvider } from '../../providers/petitions/petitions';
import { LoginPage } from '../login/login';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private petitions: PetitionsProvider, public modalCtrl: ModalController) {
    this.initializeItems();
  }

  notes: any = [];

  initializeItems() {
    this.petitions.getNotes().subscribe((data: any) => {
      console.log(data)
      this.notes = data
    }, (error) => {
        console.log({ error })
      })
  }

  createNote(){
    this.navCtrl.setRoot(NotesPage)
    console.log("creando nota nueva")
  }

  logout(){
    console.log('dd')
    localStorage.removeItem('token')
    this.navCtrl.setRoot(LoginPage);
  }

  search(){
    console.log("buscando...")
  }

  openNote(note) {
    let myModal = this.modalCtrl.create(ModalPage, { note });
    myModal.present();
  }

}