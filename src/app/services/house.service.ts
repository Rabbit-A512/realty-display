import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private url = 'http://120.78.187.115:5000/api/house_types';

  constructor(private http: HttpClient) { }

  getOneById(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  create(house) {
    return this.http.post(this.url, house);
  }

  update(house) {
    return this.http.put(`${this.url}/${house.house_type_id}`, _.omit(house, ['house_type_id']));
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
