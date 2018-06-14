import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-thumb',
  templateUrl: './house-thumb.component.html',
  styleUrls: ['./house-thumb.component.css']
})
export class HouseThumbComponent implements OnInit {

  mock_house = {
    'name': '125平方米 四房',
    'detail': '四方两厅两卫　约125平方米',
    'url': 'https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
