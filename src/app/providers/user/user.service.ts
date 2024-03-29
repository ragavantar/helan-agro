import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../app-constant/app.setting';

import { TokenService } from '../token/token.service'
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private httpOptions : object= {
  //   headers: new HttpHeaders({
  //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMiIsImlhdCI6MTU3MDYyNjY4NiwiZXhwIjoxNTcxMjMxNDg2fQ.oWRKfTghS_dzFCnkHLZuiCAl31kbwnCy_2NpiB9JJaGo2CwEwsmA3iZR-QC5gsh5jV26dBa9GV0AnXBIMf02Ng',
  //     'uidx': '68afd485-ae32-3614-9270-24f796327093'
  //   })
  // };

  
  constructor(private http:HttpClient, private token: TokenService) { }
    
  signUp(data: object){
    return this.http.post(AppSettings.API_ENDPOINT+'/api/auth/signup', data)
  }

  signIn(data: any){
    // return this.http.post(AppSettings.API_ENDPOINT+'/auth/signup', data)
      return new Observable((observer)=>{
        this.http.post(AppSettings.API_ENDPOINT+'/api/auth/signin', data)
        .subscribe(
          res => {
            const result: any = res;
            this.token.setUidx(result.uidx);
            this.token.setUserToken(result.accessToken);
            observer.next('success')
            observer.complete()
          }, err => {
            observer.error(err.error.message)
            observer.complete()
          })
        })
  }

  getUser(){
    return new Observable((observer=>{

      observer.next('first')
      this.http.get(AppSettings.API_ENDPOINT+'/user-detail/get-all', this.token.getHeader())
      .subscribe(
        data=>{
          console.log('s',data)
          // return data 
          observer.next(data)
        }, err => console.log(err)
      )

      observer.complete()
    }))
  }

  getBasic(){
    return this.http.get(AppSettings.API_ENDPOINT+'/user-detail/get-one', this.token.getHeader())
  }
  
}
