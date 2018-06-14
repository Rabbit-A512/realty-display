import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  detail_markup = `
    <table class="text-small">
      <tr>
        <th>项目地址</th>
        <td>广东省深圳市布吉区布龙路与吉华路交汇处</td>
      </tr>
      <tr>
        <th>交房时间</th>
        <td>2019年6月中</td>
      </tr>
      <tr>
        <th>产权年限</th>
        <td>70</td>
      </tr>
      <tr>
        <th>物业公司</th>
        <td>深圳市万科物业服务有限公司</td>
      </tr>
    </table>
  `;

  constructor() { }

  ngOnInit() {
  }

}
