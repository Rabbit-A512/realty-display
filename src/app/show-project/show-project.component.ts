import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  mock_project = {
    'name': '万科麓山',
    'size': '125',
    'price': '59000',
    'location': '广东省深圳市布吉区布龙路与吉华路交汇处',
    'tags': ['银湖山', '社区公立小学', '临地铁', '梦享家精装'],
    'recommend_count': 7835,
    'deal_count': 167
  };

  reason_markup = `
    <ol>
      <li>收官之作</li>
      <li>社区中央外国语小学</li>
      <li>银湖山系山居物业</li>
      <li>梦享家2.0系精装产品</li>
      <li>体育公园</li>
    </ol>
  `;

  constructor() { }

  ngOnInit() {
  }

}
