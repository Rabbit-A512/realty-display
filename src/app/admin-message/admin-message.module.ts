import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { SharedModule } from 'shared/shared.module';
import { SearchMessagesComponent } from './components/search-messages/search-messages.component';
import { ShowMessagesComponent } from './components/show-messages/show-messages.component';
import { SomeMessagesComponent } from './components/some-messages/some-messages.component';
import { ManageMessagesComponent } from './components/manage-messages/manage-messages.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AllMessagesComponent,
    SearchMessagesComponent,
    ShowMessagesComponent,
    SomeMessagesComponent,
    ManageMessagesComponent
  ],
  exports: [
    SearchMessagesComponent,
    ShowMessagesComponent,
  ]
})
export class AdminMessageModule { }
