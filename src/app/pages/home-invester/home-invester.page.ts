import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-invester',
  templateUrl: './home-invester.page.html',
  styleUrls: ['./home-invester.page.scss'],
})
export class HomeInvesterPage implements OnInit {

  filters: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleFilters(){
    this.filters = !this.filters;
  }

}
