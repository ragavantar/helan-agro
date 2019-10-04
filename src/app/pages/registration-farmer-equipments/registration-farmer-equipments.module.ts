import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationFarmerEquipmentsPage } from './registration-farmer-equipments.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFarmerEquipmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationFarmerEquipmentsPage]
})
export class RegistrationFarmerEquipmentsPageModule {}
