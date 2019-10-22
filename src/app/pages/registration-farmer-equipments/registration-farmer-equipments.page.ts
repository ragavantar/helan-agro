import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

import { RegistrationFarmerService } from '../../providers/registration-farmer/registration-farmer.service';

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

  equipForm = this.fb.group({
    equipmentName: ['', Validators.required],
    equipmentDetails: ['', Validators.required],
    equipmentImage: ['', Validators.required],
    quantity: ['', Validators.required],
    isWillingToRent: [true, Validators.required]
  })


  constructor(
    private fb:FormBuilder,
    public toastController: ToastController,
    private nav:NavController,
    private api: RegistrationFarmerService) { }

  ngOnInit() {
  }

  onSubmit(){
    // this.api.regBasic(this.equipForm.value);
    
    this.api.regEquipment(this.equipForm.value)
    .subscribe(
      res=>{
        this.presentToast('submitted successfully')
        console.log(res)
      },
      err=>{
        console.log(err)
        this.presentToast(err)
      }
    )
    // setTimeout(() => {
    //   this.nav.navigateBack('/registration-farmer');
    // }, 500);
  }
}
