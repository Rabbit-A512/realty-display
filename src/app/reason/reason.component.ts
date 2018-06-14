import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

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
