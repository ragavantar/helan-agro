import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../app-constant/app.setting';

import { TokenService } from '../token/token.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Uidx : String;
  private AccessToken: Number;

  private httpOptions : object= {
    headers: new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMiIsImlhdCI6MTU3MDYyNjY4NiwiZXhwIjoxNTcxMjMxNDg2fQ.oWRKfTghS_dzFCnkHLZuiCAl31kbwnCy_2NpiB9JJaGo2CwEwsmA3iZR-QC5gsh5jV26dBa9GV0AnXBIMf02Ng',
      'uidx': '68afd485-ae32-3614-9270-24f796327093'
    })
  };

  
  constructor(private http:HttpClient, private token: TokenService) { }

  getUid(){

  }

  setUid(){

  }
    
  signUp(data: object){
    console.log(data)
    return this.http.post(AppSettings.API_ENDPOINT+'/auth/signup', data, this.httpOptions)
  }

  signIn(){

  }



  getUser(){
    return this.http.get(AppSettings.API_ENDPOINT+'/user-detail/get-all', this.httpOptions)
  }
}
