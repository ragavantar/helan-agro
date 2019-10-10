import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

import { RegistrationFarmerService } from '../../providers/registration-farmer/registration-farmer.service';

@Component({
  selector: 'app-registration-farmer-land',
  templateUrl: './registration-farmer-land.page.html',
  styleUrls: ['./registration-farmer-land.page.scss'],
})
export class RegistrationFarmerLandPage implements OnInit {


  landForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    number: ['', Validators.required],
    location: ['', Validators.required],
    address: ['', Validators.required],
    pincode: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required]
  })


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  constructor(
    private fb:FormBuilder,
    public toastController: ToastController,
    private nav:NavController,
    private api: RegistrationFarmerService) { }

  ngOnInit() {
  }

  onSubmit(){
    // this.api.regBasic(this.landForm.value);
    this.presentToast('submitted successfully')
    setTimeout(() => {
      this.nav.navigateBack('/registration-farmer');
    }, 500);
  }
}