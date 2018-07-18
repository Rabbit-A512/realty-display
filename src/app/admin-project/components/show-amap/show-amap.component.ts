import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-amap',
  templateUrl: './show-amap.component.html',
  styleUrls: ['./show-amap.component.css']
})
export class ShowAmapComponent implements OnInit {
  // 地图组件中心的默认值为昆明市政府的高德坐标。
  center = [102.706959, 25.043652];
  @Input() marker_position = [102.706959, 25.043652];
  @Output() marker_position_change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.marker_position = [event.lnglat.lng, event.lnglat.lat];
    this.marker_position_change.emit({
      location: this.marker_position.join(',')
    });
  }

}

export interface MarkerPositionChangeEventArgs {
  location: string;
}
