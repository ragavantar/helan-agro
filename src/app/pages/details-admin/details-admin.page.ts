import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-admin',
  templateUrl: './details-admin.page.html',
  styleUrls: ['./details-admin.page.scss'],
})
export class DetailsAdminPage implements OnInit {

  tab: string = 'basic'
  
  constructor() { }

  ngOnInit() {
  }

  setTab(tab: string){
    this.tab = tab;
  }

}
