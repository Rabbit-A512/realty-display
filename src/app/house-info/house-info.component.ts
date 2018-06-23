import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {

  @Input() house;

  constructor() { }

  ngOnInit() {
  }

}
