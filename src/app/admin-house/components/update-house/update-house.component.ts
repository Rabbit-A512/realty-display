import { House } from '../../../shared/models/house';
import { HouseService } from '../../../shared/services/house.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-house',
  templateUrl: './update-house.component.html',
  styleUrls: ['./update-house.component.css']
})
export class UpdateHouseComponent implements OnInit {

  house: House;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.houseService.getOneById(params.get('house_id'))
          .subscribe(house => {
            this.house = house as House;
          });
      });
  }

}
