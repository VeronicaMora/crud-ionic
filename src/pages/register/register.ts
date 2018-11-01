import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { PetitionsProvider } from '../../providers/petitions/petitions'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private username: string = ""
  private password: string = ""

  constructor(public navCtrl: NavController, private petitions: PetitionsProvider) {
  }

  doSignup(){
    this.petitions.signup(this.username, this.password).subscribe((data) => {
      console.log(data)
      this.navCtrl.push(HomePage);
    }, (error) => {
      console.log(error)
      //this.navCtrl.push(RegisterPage)
    })
  }

  goHome(){
    this.navCtrl.push(LoginPage);
  }

}
