import { TagChangeEventArgs } from 'shared/components/tag-editor/tag-editor.component';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { House } from 'shared/models/house';
import { HouseService } from 'shared/services/house.service';
import { AppError } from 'shared/errors/app-error';
import { Unauthorized } from 'shared/errors/unauthorized';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input() house: House;
  @Input() project_id: string;

  constructor(
    private houseService: HouseService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [''],
      'size': [''],
      'price': [''],
      'tags': [''],
      'reason': [''],
      'telephone': [''],
      'discount': [''],
      'orientation': [''],
      'decoration': ['']
    });
  }

  ngOnChanges() {
    if (!this.house) {
      return;
    }

    this.form.get('name').setValue(this.house.name);
    this.form.get('size').setValue(this.house.size);
    this.form.get('price').setValue(this.house.price);
    this.form.get('tags').setValue(this.house.tags.join(','));
    this.form.get('reason').setValue(this.house.reason);
    this.form.get('telephone').setValue(this.house.telephone);
    this.form.get('discount').setValue(this.house.discount);
    this.form.get('orientation').setValue(this.house.orientation);
    this.form.get('decoration').setValue(this.house.decoration);
  }

  newHouse(value) {
    value.project_id = this.project_id;
    this.houseService.create(value)
      .subscribe(async new_house => {
        this.router.navigate(['/admin/manage-projects']);
      }, (error: AppError) => {
        if (error instanceof Unauthorized) {
          this.router.navigate(['/admin/login']);
        }
      });
  }

  updateHouse(value) {
    value.project_id = this.house.project_id;
    value.house_type_id = this.house.house_type_id;     this.houseService.update(value)
      .subscribe(async updated_house => {
        console.log(updated_house);
        this.router.navigate(['/admin/manage-houses/read', this.house.project_id]);
      }, (error: AppError) => {
      if (error instanceof Unauthorized) {
        this.router.navigate(['/admin/login']);
      }
    });
  }

  onTagChange(args: TagChangeEventArgs) {
    this.form.get('tags').setValue(args.tags_string);
  }

}
