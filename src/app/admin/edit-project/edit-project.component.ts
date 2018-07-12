import { TagChangeEventArgs } from './../tag-editor/tag-editor.component';
import { Project } from './../../models/project';
import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { MarkerPostionChangeEventArgs } from '../show-amap/show-amap.component';
import { Unauthorized } from '../../services/errors/unauthorized';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit, OnChanges {

  @Input() project: Project;
  form: FormGroup;
  location = [0, 0];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': ['', [Validators.required]],
      'size': ['', [Validators.required]],
      'price': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'tags': [''],
      'follow_amount': [0, [Validators.required]],
      'deal_amount': [0, [Validators.required]],
      'detail': [''],
      'reason': [''],
      'location': ['', [Validators.required]],
      'telephone': ['', [Validators.required]]
    });
  }

  ngOnChanges() {
    if (!this.form) {
      return;
    }
    this.form.get('name').setValue(this.project.name);
    this.form.get('size').setValue(this.project.size);
    this.form.get('price').setValue(this.project.price);
    this.form.get('address').setValue(this.project.address);
    this.form.get('location').setValue(this.project.location);
    this.form.get('tags').setValue(this.project.tags.join(','));
    this.form.get('follow_amount').setValue(this.project.follow_amount);
    this.form.get('deal_amount').setValue(this.project.deal_amount);
    this.form.get('detail').setValue(this.project.detail);
    this.form.get('reason').setValue(this.project.reason);
    this.form.get('telephone').setValue(this.project.telephone);

    this.location = this.project.location.split(',').map(v => +v);
  }

  newProject(value) {
    this.projectService.create(value)
      .subscribe(async new_project => {
        await this.router.navigate(['/admin/manage-projects/read']);
      }, error => {
        if (error instanceof Unauthorized) {
          this.router.navigate(['/admin/login']);
        } else {
          throw error;
        }
      });
  }

  updateProject(value) {
    value.project_id = this.project.project_id;
    this.projectService.update(value)
      .subscribe(async updated_project => {
        await this.router.navigate(['/admin/manage-projects/read']);
      }, error => {
        if (error instanceof Unauthorized) {
          this.router.navigate(['/admin/login']);
        } else {
          throw error;
        }
      });
  }

  onTagChange(args: TagChangeEventArgs) {
    this.form.get('tags').setValue(args.tags_string);
  }

  updateLocation(args: MarkerPostionChangeEventArgs) {
    this.form.get('location').setValue(args.location);
  }

}
