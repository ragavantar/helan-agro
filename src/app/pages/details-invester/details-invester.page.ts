import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-invester',
  templateUrl: './details-invester.page.html',
  styleUrls: ['./details-invester.page.scss'],
})
export class DetailsInvesterPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true
  };
 
  constructor() { }

  ngOnInit() {
  }

}
