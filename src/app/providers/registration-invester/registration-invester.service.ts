import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TokenService } from '../token/token.service';

import { AppSettings } from '../../app-constant/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RegistrationInvesterService {

  constructor(private http:HttpClient, private token: TokenService) { }

  registerd(data: object){
    return this.http.post(AppSettings.API_ENDPOINT+'/auth/signup', data, this.token.getHeader())
  }
  
}
