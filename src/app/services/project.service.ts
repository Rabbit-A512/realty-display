import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class ProjectService {
  private url = 'http://120.78.187.115:5000/api/projects';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  getOneById(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  create(project) {
    return this.http.post(this.url, project);
  }

  update(project) {
    return this.http.put(`${this.url}/${project.project_id}`, _.omit(project, ['project_id']));
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
