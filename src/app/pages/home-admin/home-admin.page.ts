import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  filters: boolean = true;

  appliedFilters : Array<string> = []

  constructor() { }

  ngOnInit() {
  }

  toggleFilters(){
    this.filters = !this.filters;
  }

  toggleFilter(name : string){
    let ind : number = this.appliedFilters.indexOf(name);

    if(ind > -1)
    {
      //remove
      this.appliedFilters.splice(ind, 1);

    }else{
      //add
      this.appliedFilters.push(name)
    }
  }

  checkFilter(name: string){
    return this.appliedFilters.includes(name)
  }

}
