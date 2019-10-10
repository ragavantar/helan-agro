import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationFarmerLandPage } from './registration-farmer-land.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFarmerLandPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationFarmerLandPage]
})
export class RegistrationFarmerLandPageModule {}
