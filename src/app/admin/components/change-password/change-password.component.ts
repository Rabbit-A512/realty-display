import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { AuthService } from '../../services/auth.service';
import { AppError } from '../../../shared/errors/app-error';
import { BadInput } from '../../../shared/errors/bad-input';
import { Router } from '@angular/router';
import { Unauthorized } from '../../../shared/errors/unauthorized';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      old_password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      confirm: ['', [Validators.required]]
    }, {
      validator: this.confirmPasswordValidator
    });
  }

  confirmPasswordValidator(form: FormGroup): { [s: string]: boolean } {
    if (form.get('new_password').value !== form.get('confirm').value) {
      return { unConfirmedPassword: true };
    }
  }

  submitForm(value) {
    const passwords = _.omit(value, ['confirm']);
    this.authService.changePassword(passwords)
      .subscribe(res => {
        console.log(res);
        this.authService.logout();
      }, (error: AppError) => {
        if (error instanceof Unauthorized) {
          this.router.navigate(['/admin/login']);
        } else if (error instanceof BadInput) {
          this.form.setErrors({ invalidOldPassword: true });
        } else {
          throw error;
        }
      });
  }

  get oldPassword() {
    return this.form.get('old_password');
  }

  get newPassword() {
    return this.form.get('new_password');
  }

  get confirmPassword() {
    return this.form.get('confirm');
  }

}
