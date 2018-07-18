import { ProjectService } from '../../../shared/services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../shared/models/project';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.projectService.getOneById(params.get('project_id'))
          .subscribe(project => {
            this.project = project as Project;
          });
      });
  }

}
