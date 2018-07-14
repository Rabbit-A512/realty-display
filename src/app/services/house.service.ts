import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Unauthorized } from './errors/unauthorized';
import { throwError } from 'rxjs';
import { AppError } from './errors/app-error';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { handleServiceError } from './errors/app-error-handler';

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

  getOneById(id) {
    return this.http.get(`${this.url}/${id}`)
      .pipe(
        catchError(handleServiceError)
      );
  }

  create(house) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.post(this.url, house, this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

  update(house) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.put(`${this.url}/${house.house_type_id}`, _.omit(house, ['house_type_id']), this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

  delete(id) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.delete(`${this.url}/${id}`, this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }
}
