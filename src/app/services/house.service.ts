import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Unauthorized } from './errors/unauthorized';
import { throwError } from 'rxjs';
import { AppError } from './errors/app-error';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private url = 'http://120.78.187.115:5000/api/house_types';
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private handleError(error) {
    if (error.status === 401) {
      this.router.navigate(['/admin/login']);
      return;
      // return throwError(new Unauthorized(error));
    } else {
      return throwError(new AppError(error));
    }
  }

  getOneById(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  create(house) {
    return this.http.post(this.url, house, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(house) {
    return this.http.put(`${this.url}/${house.house_type_id}`, _.omit(house, ['house_type_id']), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
