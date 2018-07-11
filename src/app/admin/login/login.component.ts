import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  doLogin(password: HTMLInputElement) {
    if (!password.value) {
      return;
    }
    const temp = {
      password: password.value
    };
    this.authService.login(temp)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/admin/manage-projects']);
        } else {
          this.errorMessage = '密码错误';
        }
      });
  }

}
