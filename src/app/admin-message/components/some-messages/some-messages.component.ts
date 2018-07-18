import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../shared/services/message.service';
import { Message } from '../../../shared/models/message';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../shared/services/project.service';

@Component({
  selector: 'app-some-messages',
  templateUrl: './some-messages.component.html',
  styleUrls: ['./some-messages.component.css']
})
export class SomeMessagesComponent implements OnInit {
  messages: Message[] = [];
  project_id: string;

  constructor(
    private messageService: MessageService,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  loadMessages() {
    this.messages = [];
    this.route.paramMap
      .subscribe(params => {
        this.project_id = params.get('project_id');
        this.projectService.getOneById(this.project_id)
          .subscribe(project => {
            const message_ids = project['message_ids'];
            for (let i = 0; i < message_ids.length; i++) {
              this.messageService.getOneById(message_ids[i])
                .subscribe(message => {
                  this.messages.push(message as Message);
                });
            }
          });
      });
  }

  ngOnInit() {
    this.loadMessages();
  }

  doMessageChange(arg) {
    this.loadMessages();
  }

  updateMessages(messages: Message[]) {
    this.messages = messages;
  }

}
