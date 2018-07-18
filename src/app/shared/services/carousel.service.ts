import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { pipe, throwError } from 'rxjs';
import { Unauthorized } from '../errors/unauthorized';
import { AppError } from '../errors/app-error';
import { handleServiceError } from '../errors/app-error-handler';

@Injectable()
export class CarouselService {

  private project_carousel_url = 'http://120.78.187.115:5000/api/project_images';
  private house_carousel_url = 'http://120.78.187.115:5000/api/house_type_images';
  private home_carousel_url = 'http://120.78.187.115:5000/api/carousels';
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    })
  };

  constructor(private http: HttpClient) { }

  deleteProjectCarousel(id: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.delete(`${this.project_carousel_url}/${id}`, this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

  deleteHouseCarousel(id: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.delete(`${this.house_carousel_url}/${id}`, this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

  showHomeCarousel(id) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.post(`${this.home_carousel_url}/${id}`, {}, this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

  unshowHomeCarousel(id) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
    return this.http.delete(`${this.home_carousel_url}/${id}`, this.httpOptions)
      .pipe(
        catchError(handleServiceError)
      );
  }

  get shownCarousels() {
    return this.http.get(`${this.home_carousel_url}`)
      .pipe(
        catchError(handleServiceError)
      );
  }
}
