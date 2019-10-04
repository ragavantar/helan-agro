import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationFarmerPage } from './registration-farmer.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFarmerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationFarmerPage]
})
export class RegistrationFarmerPageModule {}
