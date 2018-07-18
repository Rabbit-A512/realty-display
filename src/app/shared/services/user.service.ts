import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = '';

  constructor(
    private http: HttpClient
  ) { }

  get allUsers(): User[] {
    const users: User[] = [
      {
        name: '用户1',
        phone: '15087186168',
        bio: '一些个人介绍',
        checked: false
      },
      {
        name: '用户2',
        phone: '15087186168',
        bio: '一些个人介绍',
        checked: false
      },
      {
        name: '用户3',
        phone: '15087186168',
        bio: '一些个人介绍',
        checked: false
      },
      {
        name: '用户4',
        phone: '15087186168',
        bio: '一些个人介绍',
        checked: false
      },
    ];

    return users;
  }
}
