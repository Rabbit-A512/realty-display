import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-amap',
  templateUrl: './basic-amap.component.html',
  styleUrls: ['./basic-amap.component.css']
})
export class BasicAmapComponent implements OnInit {

  @Input() marker_position = [];

  constructor() { }

  ngOnInit() {
  }

}
