import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesPage } from '../notes/notes'
import { PetitionsProvider } from '../../providers/petitions/petitions'
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private petitions: PetitionsProvider) {
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

  removeNote(id_note){
    this.petitions.removeNote(id_note).subscribe((data) => {
      console.log(data)
    }, (error) => {
      console.log(error)
    })
  }

  logout(){
    console.log('dd')
    localStorage.removeItem('token')
    this.navCtrl.setRoot(LoginPage);
  }

  search(){
    console.log("buscando...")
  }
}

 