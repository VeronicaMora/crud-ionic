import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { PetitionsProvider } from '../../providers/petitions/petitions'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username: string = ""
  private password: string = ""

  constructor(public navCtrl: NavController, private petitions: PetitionsProvider) {
  }

  doLogin(){
    this.petitions.login(this.username, this.password).subscribe((data:any) => {
      localStorage.setItem("token", data.token);
      this.navCtrl.setRoot(HomePage);
    }, (error) => {
      console.log(error)
    })
  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
}
