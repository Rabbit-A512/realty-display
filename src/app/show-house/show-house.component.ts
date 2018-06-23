import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HouseService } from './../services/house.service';

@Component({
  selector: 'app-show-house',
  templateUrl: './show-house.component.html',
  styleUrls: ['./show-house.component.css']
})
export class ShowHouseComponent implements OnInit {

  house: any;


  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.houseService.getOneById(params.get('house_id'))
          .subscribe(house => {
            this.house = house;
          });
      });
  }

}
