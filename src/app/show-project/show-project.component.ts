import { Project } from './../models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  project: Project;
  location = [0, 0];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.projectService.getOneById(params.get('project_id'))
          .subscribe(project => {
            this.project = project as Project;
            this.location = this.project.location.split(',').map(v => +v);
          });
      });
  }

}
