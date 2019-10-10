import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';

import { RegistrationFarmerService } from '../../providers/registration-farmer/registration-farmer.service';

@Component({
  selector: 'app-registration-farmer',
  templateUrl: './registration-farmer.page.html',
  styleUrls: ['./registration-farmer.page.scss'],
})
export class RegistrationFarmerPage implements OnInit {

  tab: string = 'basic'

  basicForm = this.fb.group({
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
    private fb: FormBuilder,
    public toastController: ToastController,
    private nav: NavController,
    private api: RegistrationFarmerService) { }

  ngOnInit() {
  }

  setTab(tab: string){
    this.tab = tab;
  }

  saveContent(){
    this.presentToast('Form saved successfully');
  }

  submitForm(){
    // this.api.regBasic(this.basicForm.value);
    this.presentToast('Form submitted successfully');
  }

}
