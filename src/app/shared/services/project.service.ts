import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Unauthorized } from '../errors/unauthorized';
import { throwError } from 'rxjs';
import { AppError } from '../errors/app-error';
import { catchError } from 'rxjs/operators';
import { handleServiceError } from '../errors/app-error-handler';

@Injectable()
export class ProjectService {
  private url = 'http://120.78.187.115:5000/api/projects';
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        catchError(handleServiceError)
      );
  }

  getOneById(id) {
    return this.http.get(`${this.url}/${id}`)
      .pipe(
        catchError(handleServiceError)
      );
  }

  create(project) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.post(this.url, project, this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

  update(project) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.put(`${this.url}/${project.project_id}`, _.omit(project, ['project_id']), this.httpOptions)
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
