import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-thumb',
  templateUrl: './project-thumb.component.html',
  styleUrls: ['./project-thumb.component.css']
})
export class ProjectThumbComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
