import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { pipe, throwError } from 'rxjs';
import { Unauthorized } from './errors/unauthorized';
import { AppError } from './errors/app-error';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private project_carousel_url = 'http://120.78.187.115:5000/api/project_images';
  private house_carousel_url = 'http://120.78.187.115:5000/api/house_type_images';
  private home_carousel_url = 'http://120.78.187.115:5000/api/carousels';
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    })
  };

  constructor(private _http: HttpClient) { }

  private handleError(error) {
    if (error.status === 401) {
      return throwError(new Unauthorized(error));
    } else {
      return throwError(new AppError(error));
    }
  }

  deleteProjectCarousel(id: string) {
    return this._http.delete(`${this.project_carousel_url}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteHouseCarousel(id: string) {
    return this._http.delete(`${this.house_carousel_url}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  showHomeCarousel(id) {
    return this._http.post(`${this.home_carousel_url}/${id}`, {}, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  unshowHomeCarousel(id) {
    return this._http.delete(`${this.home_carousel_url}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  get shownCarousels() {
    return this._http.get(`${this.home_carousel_url}`);
  }
}
