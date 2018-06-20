import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-read-project',
  templateUrl: './read-project.component.html',
  styleUrls: ['./read-project.component.css']
})
export class ReadProjectComponent implements OnInit {
  projects = [];

  constructor(
    private projectService: ProjectService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.projectService.getAll()
      .subscribe(projects => {
        this.projects = projects as any;
      });
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    });
  }

  delete_project(id) {
    this.projectService.delete(id)
      .subscribe(async deleted_project => {
        await this.router.navigate(['/admin/manage-projects']);
      });
  }
}
