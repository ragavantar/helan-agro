import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';

import { RegistrationFarmerService } from '../../providers/registration-farmer/registration-farmer.service';
import { UserService } from 'src/app/providers/user/user.service';

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
    phoneNumber: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    pin: ['', Validators.required],
    state: ['', Validators.required]
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
    private api: RegistrationFarmerService,
    private userService: UserService
    ) { }

  ngOnInit() {
    // this.userService.getBasic()
    // .subscribe(
    //   res=>{
    //     this.basicForm.patchValue(res)
    //   }
    //   ,
    //   err=>{
    //     console.log('err', err)
    //   }
    // )
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

  submitBasic(){

  }

}
