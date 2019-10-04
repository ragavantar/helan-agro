import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration-farmer-equipments',
  templateUrl: './registration-farmer-equipments.page.html',
  styleUrls: ['./registration-farmer-equipments.page.scss'],
})
export class RegistrationFarmerEquipmentsPage implements OnInit {

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
