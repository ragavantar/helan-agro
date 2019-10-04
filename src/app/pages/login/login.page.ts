import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signin: boolean = false;
  userType : string = 'Farmer'

  signinForm = this.fb.group({
    userId: ['', Validators.required],
    password: ['', Validators.required]
  })

  signupForm = this.fb.group({
    name: ['', Validators.required],
    number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]]
  })
  //pattern should also add

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }



  constructor(private fb: FormBuilder, public toastController: ToastController, public nav:NavController) { }

  ngOnInit() {
  }

  formType(){
    this.signin = !this.signin;
  }

  setUserType(type : string){
    this.userType = type;
  }

  onSubmit(){
    console.log('submitted', this.signupForm, this.signupForm.valid)
    this.presentToast('successfully submitted')
    this.nav.navigateForward('registration-farmer')
  }

}
