import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration-farmer-land',
  templateUrl: './registration-farmer-land.page.html',
  styleUrls: ['./registration-farmer-land.page.scss'],
})
export class RegistrationFarmerLandPage implements OnInit {

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  constructor(public toastController: ToastController, private nav:NavController) { }

  ngOnInit() {
  }

  onSubmit(){
    this.presentToast('submitted successfully')
    setTimeout(() => {
      this.nav.navigateBack('/registration-farmer');
    }, 500);
  }
}