import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() detail_markup: string;
  @Input() location: string;

  constructor() { }

  ngOnInit() {
  }

}
