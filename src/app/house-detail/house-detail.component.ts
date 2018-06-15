import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  house_detail_markup = `
    <table>
      <tr>
        <th>户型优惠</th>
        <td>无</td>
      </tr>
      <tr>
        <th>户型朝向</th>
        <td>南向</td>
      </tr>
      <tr>
        <th>装修状况</th>
        <td>精装</td>
      </tr>
    </table>
  `;

  constructor() { }

  ngOnInit() {
  }

}
