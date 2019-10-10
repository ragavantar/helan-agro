import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registration-farmer', loadChildren: './pages/registration-farmer/registration-farmer.module#RegistrationFarmerPageModule' },
  { path: 'registration-farmer-equipments', loadChildren: './pages/registration-farmer-equipments/registration-farmer-equipments.module#RegistrationFarmerEquipmentsPageModule' },
  { path: 'registration-farmer-land', loadChildren: './pages/registration-farmer-land/registration-farmer-land.module#RegistrationFarmerLandPageModule' },
  { path: 'registration-invester', loadChildren: './pages/registration-invester/registration-invester.module#RegistrationInvesterPageModule' },
  { path: 'home-invester', loadChildren: './pages/home-invester/home-invester.module#HomeInvesterPageModule' },
  { path: 'details-invester', loadChildren: './pages/details-invester/details-invester.module#DetailsInvesterPageModule' },
  { path: 'details-admin', loadChildren: './pages/details-admin/details-admin.module#DetailsAdminPageModule' },
  { path: 'home-admin', loadChildren: './pages/home-admin/home-admin.module#HomeAdminPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
