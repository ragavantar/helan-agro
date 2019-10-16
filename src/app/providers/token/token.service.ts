import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private USER_TOKEN : string;
  Uidx : string;
  
  constructor(private storage: Storage) { }
  
  setUserToken(token: string) {
    // this.storage.set('accessToken', token)
    this.USER_TOKEN = token;
  }
  
  getUserToken(){
    return this.USER_TOKEN;
  }

  setUidx(id: string){
    this.Uidx = id;
  }

  getUidx(){
    return this.Uidx;
  }

  getHeader(){
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ this.USER_TOKEN,
        'uidx': this.Uidx
      })
    }
  }

}
