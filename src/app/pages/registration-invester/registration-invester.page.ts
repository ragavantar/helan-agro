import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

import { RegistrationInvesterService } from '../../providers/registration-invester/registration-invester.service'

@Component({
  selector: 'app-registration-invester',
  templateUrl: './registration-invester.page.html',
  styleUrls: ['./registration-invester.page.scss'],
})
export class RegistrationInvesterPage implements OnInit {


  regForm = this.fb.group({
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
    public fb:FormBuilder,
    public toastController:ToastController,
    private nav:NavController,
    private api: RegistrationInvesterService) { }

  ngOnInit() {
  }

  onSubmit(){
        // this.api.register(this.regForm.value);
    this.presentToast('saved successfully');
    this.nav.navigateForward('home-invester')
  }
}
