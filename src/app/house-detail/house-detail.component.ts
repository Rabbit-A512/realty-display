import { House } from './../models/house';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  @Input() house: House;

  constructor() { }

  ngOnInit() {
  }

}
