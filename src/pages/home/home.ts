import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesPage } from '../notes/notes'
import { PetitionsProvider } from '../../providers/petitions/petitions'

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
    this.notes = [
      
    ];
  }


  getItems(ev) {
    
  }

  onCancel(){
    this.initializeItems()
  }

  createNote(){
    this.navCtrl.push(NotesPage)
    console.log('asd')
  }

}
