import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unauthorized } from './errors/unauthorized';
import { pipe, throwError } from 'rxjs';
import { AppError } from './errors/app-error';
import { catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { handleServiceError } from './errors/app-error-handler';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url = 'http://120.78.187.115:5000/api/messages';
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router
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

  create(message) {
    return this.http.post(this.url, message)
      .pipe(
        catchError(handleServiceError)
      );
  }

  update(message) {
    return this.http.put(`${this.url}/${message.message_id}`, _.omit(message, ['message_id']), this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

}
