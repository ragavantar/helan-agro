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

  // signupForm = this.fb.group({
  //   name: ['', Validators.required],
  //   number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  //   email: ['', [Validators.required, Validators.email]]
  // })
  //pattern should also add

  //   {
  //     "firstName":"sathish",
  //     "lastName":"mani",
  //     "username":"samthish",
  //     "email":"sathish@gail.com",
  //     "password":"sathish",
  //     "phoneNumber":"12131313",
  //     "signupType": "FARMER"
  // }

  signupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
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

  // onSubmit(){
  //   console.log('submitted', this.signupForm, this.signupForm.valid)
  //   this.presentToast('successfully submitted')
  //   setTimeout(() => {
  //     if(this.userType == 'Farmer'){
  //       this.userService.signUp(this.signupForm.value).subscribe(data => console.log(data), err => console.log(err))
  //       console.log(this.signinForm.value)
  //       // this.nav.navigateForward('registration-farmer')
  //   }
  //     else if(this.userType == 'Invester'){
  //       this.signin?
  //       this.nav.navigateForward('home-invester')
  //       :
  //       this.nav.navigateForward('registration-invester')
  //     }
  //     else if(this.userType == 'Admin')
  //     this.nav.navigateForward('home-admin')
  //   }, 500);
  // }

  goNextPg(){
      if(this.userType == 'Farmer'){
        this.nav.navigateForward('registration-farmer');
      }else if(this.userType == 'Invester'){
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
    this.userService.signUp(data).subscribe(data => {console.log(data), this.goNextPg()}, err => console.log(err))
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