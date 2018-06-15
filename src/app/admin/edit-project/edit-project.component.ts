import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  @Input() project: any;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': ['', [Validators.required]],
      'size': ['', [Validators.required]],
      'price': ['', [Validators.required]],
      'location': ['', [Validators.required]],
      'tags': [''],
      'recommend_count': [0, [Validators.required]],
      'deal_count': [0, [Validators.required]],
      'detail_markup': [''],
      'reason_markup': [''],
    });

    if (!this.project) {
      return;
    }

    this.form.get('name').setValue(this.project.name);
    this.form.get('size').setValue(this.project.size);
    this.form.get('price').setValue(this.project.price);
    this.form.get('location').setValue(this.project.location);
    this.form.get('tags').setValue(this.project.tags);
    this.form.get('recommend_count').setValue(this.project.recommend_count);
    this.form.get('deal_count').setValue(this.project.deal_count);
    this.form.get('detail_markup').setValue(this.project.detail_markup);
    this.form.get('reason_markup').setValue(this.project.reason_markup);

  }

  newProject(value) {
    console.log(value);
  }

  updateProject(value) {
    console.log(value);
  }

}
