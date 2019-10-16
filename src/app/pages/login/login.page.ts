import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';

import { UserService } from '../../providers/user/user.service';
import { TokenService } from '../../providers/token/token.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signin: boolean = false;
  userType: string = 'Farmer'

  signinForm = this.fb.group({
    usernameOrEmail: ['', Validators.required],
    password: ['', Validators.required]
  })

  signupForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
    lastName: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    phoneNumber: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
  })


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }



  constructor(
    private fb: FormBuilder,
    public toastController: ToastController,
    private nav: NavController,
    private userService: UserService,
    private token: TokenService
  ) { }

  ngOnInit() {
    // this.userService.getUser().subscribe(data => console.log(data), err => console.log(err))
  }

  formType() {
    this.signin = !this.signin;
  }

  setUserType(type: string) {
    this.userType = type;
  }

  goNextPg(){
      if(this.userType == 'Farmer'){
        this.nav.navigateForward('registration-farmer');
      }else if(this.userType == 'Investor'){
        // this.signin?
        this.nav.navigateForward('home-invester')
        // :
        // this.nav.navigateForward('registration-invester')
      }else if(this.userType == 'Admin'){
        this.nav.navigateForward('home-admin')
      }
  }

  checkSignUp() {
    let data = {...this.signupForm.value};
    // data.signupType = 'FARMER';
    data.signupType = this.userType.toUpperCase();
    this.userService.signUp(data)
    .subscribe(
      res => {
        const result: any = res; 
        this.presentToast(result.message)
        window.location.href = '/login'
      }, 
      err => this.presentToast(err.error.message))
  }

  checkSignIn(){
    this.userService.signIn(this.signinForm.value)
    .subscribe(
      data=>{
        this.presentToast(data)
        this.goNextPg()
      },
      err => this.presentToast(err)
    )
  }
}