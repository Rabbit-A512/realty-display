import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url = '120.78.187.115:5000/api/messages';

  constructor() { }
}
