import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private USER_TOKEN : string;
  
  constructor(private storage: Storage) { }
  
  setUserToken(token: string) {
    // this.storage.set('accessToken', token)
    this.USER_TOKEN = token;
  }
  
  getUserToken(){
    return this.USER_TOKEN;
  }
}
