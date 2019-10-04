import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registration-farmer', loadChildren: './pages/registration-farmer/registration-farmer.module#RegistrationFarmerPageModule' },
  { path: 'registration-farmer-equipments', loadChildren: './pages/registration-farmer-equipments/registration-farmer-equipments.module#RegistrationFarmerEquipmentsPageModule' },
  { path: 'registration-farmer-land', loadChildren: './pages/registration-farmer-land/registration-farmer-land.module#RegistrationFarmerLandPageModule' },
  { path: 'registration-invester', loadChildren: './pages/registration-invester/registration-invester.module#RegistrationInvesterPageModule' },
  { path: 'home-invester', loadChildren: './pages/home-invester/home-invester.module#HomeInvesterPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
