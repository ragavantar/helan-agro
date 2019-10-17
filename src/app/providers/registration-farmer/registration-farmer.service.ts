import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TokenService } from '../token/token.service';

import { AppSettings } from '../../app-constant/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RegistrationFarmerService {

  constructor(private http:HttpClient, private token: TokenService) { }

  regBasic(data: object){
    return this.http.put(AppSettings.API_ENDPOINT+'/user-detail/update', data, this.token.getHeader())
  }
  
  regLand(data: object){
    return this.http.post(AppSettings.API_ENDPOINT+'/auth/signup', data, this.token.getHeader())
  }
  regEquipment(data: object){
    return this.http.post(AppSettings.API_ENDPOINT+'/auth/signup', data, this.token.getHeader())
  }

}
