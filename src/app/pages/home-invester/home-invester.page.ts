import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-invester',
  templateUrl: './home-invester.page.html',
  styleUrls: ['./home-invester.page.scss'],
})
export class HomeInvesterPage implements OnInit {

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
