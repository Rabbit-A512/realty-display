import { Project } from './../models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  project: Project;
  location = [0, 0];
  form: FormGroup;
  messageModal: NgbModalRef;

  constructor(
    private projectService: ProjectService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: NgbModal
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

    this.form = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(100)]],
      phone: ['', [Validators.required]],
      call: ['', [Validators.required]]
    });
  }

  open(content: NgbModalRef) {
    this.messageModal = this.modalService.open(content, { centered: true });
  }

  submitMessage(value) {
    value['project_id'] = this.project.project_id;
    this.messageService.create(value)
      .subscribe(createdMessage => {
        console.log(createdMessage);
        this.messageModal.close();
      });
  }

  get content() {
    return this.form.get('content');
  }

}
