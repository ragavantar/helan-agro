import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-farmer',
  templateUrl: './registration-farmer.page.html',
  styleUrls: ['./registration-farmer.page.scss'],
})
export class RegistrationFarmerPage implements OnInit {

  tab: string = 'basic'

  constructor() { }

  ngOnInit() {
  }

  setTab(tab: string){
    this.tab = tab;
  }

}
