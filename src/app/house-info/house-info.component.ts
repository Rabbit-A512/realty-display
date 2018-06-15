import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {

  @Input() mock_house = {
    'name': '125平方米　四房',
    'price': '59000',
    'detail': '四房两厅两卫（约125平方米）',
    'tags': ['南北通透', '大阳台', '全屋中央空调']
  };

  constructor() { }

  ngOnInit() {
  }

}
