import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-thumb',
  templateUrl: './project-thumb.component.html',
  styleUrls: ['./project-thumb.component.css']
})
export class ProjectThumbComponent implements OnInit {

  url = 'https://ng-bootstrap.github.io/img/logo-stack.png';

  constructor() { }

  ngOnInit() {
  }

}
