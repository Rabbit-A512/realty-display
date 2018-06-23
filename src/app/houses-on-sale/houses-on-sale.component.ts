import { HouseService } from './../services/house.service';
import { House } from './../models/house';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-houses-on-sale',
  templateUrl: './houses-on-sale.component.html',
  styleUrls: ['./houses-on-sale.component.css']
})
export class HousesOnSaleComponent implements OnChanges {

  @Input() house_ids: string[];
  houses: House[] = [];

  constructor(
    private houseService: HouseService
  ) { }

  ngOnChanges() {
    for (let i = 0; i < this.house_ids.length; i++) {
      this.houseService.getOneById(this.house_ids[i])
        .subscribe(house => {
          this.houses.push(house as House);
        });
    }
  }
}
