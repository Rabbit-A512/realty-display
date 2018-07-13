import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-read-project',
  templateUrl: './read-project.component.html',
  styleUrls: ['./read-project.component.css']
})
export class ReadProjectComponent implements OnInit {
  projects: Project[];
  modal: NgbModalRef;

  constructor(
    private projectService: ProjectService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  loadProjects() {
    this.projectService.getAll()
      .subscribe(projects => {
        this.projects = projects as any;
      });
  }

  ngOnInit() {
    this.loadProjects();
  }

  open(content) {
    this.modal = this.modalService.open(content);
  }

  delete_project(id) {
    this.projectService.delete(id)
      .subscribe(async deleted_project => {
        this.modal.close();
        this.loadProjects();
      });
  }
}
