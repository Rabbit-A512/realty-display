import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: any;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getAll()
      .subscribe(projects => {
        this.projects = projects;
      });
  }

}
