import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-house',
  templateUrl: './show-house.component.html',
  styleUrls: ['./show-house.component.css']
})
export class ShowHouseComponent implements OnInit {

  mock_house = {
    'name': '125平方米　四房',
    'price': '59000',
    'detail': '四房两厅两卫（约125平方米）',
    'tags': ['南北通透', '大阳台', '全屋中央空调']
  };

  reason_markup = `
    <ol>
      <li>全屋中央空调</li>
      <li>伊莱克斯品牌厨具</li>
      <li>汉斯格雅、TOTO品外卫浴设施</li>
      <li>南北通透，通风采光俱佳</li>
      <li>全屋收纳体系精心打造</li>
    </ol>
  `;

  constructor() { }

  ngOnInit() {
  }

}
