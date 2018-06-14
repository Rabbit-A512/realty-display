import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  mock_project = {
    'name': '万科麓山',
    'size': '125',
    'price': '59000',
    'location': '广东省深圳市布吉区布龙路与吉华路交汇处',
    'tags': ['银湖山', '社区公立小学', '临地铁', '梦享家精装'],
    'recommend_count': 7835,
    'deal_count': 167
  };

  constructor() { }

  ngOnInit() {
  }

}
