import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AppError } from '../../services/errors/app-error';
import { Unauthorized } from '../../services/errors/unauthorized';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.css']
})
export class ShowMessagesComponent implements OnInit {
  @Input() messages: Message[];
  @Output() messageChange = new EventEmitter();
  deleteModal: NgbModalRef;
  viewModal: NgbModalRef;

  constructor(
    private messageService: MessageService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openDeleteModal(deleteModal) {
    this.deleteModal = this.modalService.open(deleteModal);
  }

  openViewModal(viewModal) {
    this.viewModal = this.modalService.open(viewModal);
  }

  delete_message(id) {
    this.messageService.delete(id)
      .subscribe(deletedMessage => {
        console.log(deletedMessage);
        this.deleteModal.close();
        this.router.navigate(['/admin/manage-messages']);
        this.messageChange.emit({ messageChange: true });
      }, (error: AppError) => {
        if (error instanceof Unauthorized) {
          this.router.navigate(['/admin/login']);
        } else {
          throw error;
        }
      });
  }

}
