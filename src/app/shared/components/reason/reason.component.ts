import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

  @Input() reason: string;

  constructor() { }

  ngOnInit() {
  }

}
