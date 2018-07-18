import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'shared/services/message.service';
import { AppError } from 'shared/errors/app-error';
import { NotFound } from 'shared/errors/not-found';
import { Unauthorized } from 'shared/errors/unauthorized';
import { Message } from 'shared/models/message';

@Component({
  selector: 'app-search-messages',
  templateUrl: './search-messages.component.html',
  styleUrls: ['./search-messages.component.css']
})
export class SearchMessagesComponent implements OnInit {

  @Input() project_id: string;
  form: FormGroup;
  @Output() receiveResults = new EventEmitter();
  @Output() resetResults = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      is_read: [null, []],
      datetime: [null, []],
      phone: [null, []],
      call: [null, []],
      content: [null, []]
    });
  }

  doSearch(values) {
    if (values.datetime && values.datetime['year']) {
      values.datetime = `${values.datetime.year}-${values.datetime.month}-${values.datetime.day}`;
    }
    if (this.project_id) {
      values['project_id'] = this.project_id;
    }
    this.messageService.getByCondition(values)
      .subscribe((results: Message[]) => {
        console.log(results);
        this.receiveResults.emit(results);
      }, (error: AppError) => {
        if (error instanceof NotFound) {
          alert('Not found');
        } else if (error instanceof Unauthorized) {
          console.log('Unauthorized...');
        } else {
          throw error;
        }
      });
  }

  reset() {
    this.form.reset();
    this.resetResults.emit();
  }

}
