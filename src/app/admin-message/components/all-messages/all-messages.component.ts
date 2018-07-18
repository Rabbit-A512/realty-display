import { Component, OnInit } from '@angular/core';
import { MessageService } from 'shared/services/message.service';
import { Message } from 'shared/models/message';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css']
})
export class AllMessagesComponent implements OnInit {
  messages: Message[];

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getAll()
      .subscribe(messages => {
        this.messages = messages as Message[];
      });
  }

  doMessageChange(args) {
    this.loadMessages();
  }

  updateMessages(messages: Message[]) {
    this.messages = messages;
  }
}
