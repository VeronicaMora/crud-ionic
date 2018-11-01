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

  constructor(public navCtrl: NavController, public petitions: PetitionsProvider) {
    this.initializeItems();
  }

  searchQuery: string = '';
  notes: string[];

  initializeItems() {
    this.petitions.getNotes().subscribe((data: any) => {
      console.log(data)
      this.notes = data.data
    }, (error) => {
        console.log({ error })
      })
  }

  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;
  }

  createNote(){
    this.navCtrl.setRoot(NotesPage)
    console.log("creando nota nueva")
  }

  logout(){
    this.navCtrl.setRoot(LoginPage)
  }
}

 