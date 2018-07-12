import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.css']
})
export class ShowMessagesComponent implements OnInit {
  @Input() messages: Message[];
  modal: NgbModalRef;

  constructor(
    private messageService: MessageService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
  }

  open(content) {
    this.modal = this.modalService.open(content);
  }

  delete_message(id) {
    this.messageService.delete(id)
      .subscribe(deletedMessage => {
        console.log(deletedMessage);
        this.modal.close();
        this.router.navigate(['/admin/manage-messages']);
      });
  }

}
