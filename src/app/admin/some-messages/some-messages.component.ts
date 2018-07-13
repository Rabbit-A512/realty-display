import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-some-messages',
  templateUrl: './some-messages.component.html',
  styleUrls: ['./some-messages.component.css']
})
export class SomeMessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(
    private messageService: MessageService,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  loadMessages() {
    this.route.paramMap
      .subscribe(params => {
        this.projectService.getOneById(params.get('project_id'))
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

}
