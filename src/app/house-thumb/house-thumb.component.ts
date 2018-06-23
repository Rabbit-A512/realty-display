import { Component, OnInit, Input } from '@angular/core';
import { House } from '../models/house';

@Component({
  selector: 'app-house-thumb',
  templateUrl: './house-thumb.component.html',
  styleUrls: ['./house-thumb.component.css']
})
export class HouseThumbComponent implements OnInit {

  @Input() house: House;

  constructor() { }

  ngOnInit() {
  }

}
