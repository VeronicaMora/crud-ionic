import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesPage } from '../notes/notes'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  searchQuery: string = '';
  notes: string[];

  initializeItems() {
    this.notes = [
      
    ];
  }


  getItems(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.notes = this.notes.filter((item) => {
        return (notes.(falta).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else if(!val || val.trim() == ''){
      this.initializeItems()
    }
  }

  onCancel(){
    this.initializeItems()
  }

  createNote(){
    this.navCtrl.push(NotesPage)
    console.log('asd')
  }

}
