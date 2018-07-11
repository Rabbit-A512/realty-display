import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Unauthorized } from './errors/unauthorized';
import { throwError } from 'rxjs';
import { AppError } from './errors/app-error';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProjectService {
  private url = 'http://120.78.187.115:5000/api/projects';
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    })
  };

  constructor(private http: HttpClient) { }

  private handleError(error) {
    if (error.status === 401) {
      return throwError(new Unauthorized(error));
    } else {
      return throwError(new AppError(error));
    }
  }

  getAll() {
    return this.http.get(this.url);
  }

  getOneById(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  create(project) {
    return this.http.post(this.url, project, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(project) {
    return this.http.put(`${this.url}/${project.project_id}`, _.omit(project, ['project_id']), this.httpOptions)
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
