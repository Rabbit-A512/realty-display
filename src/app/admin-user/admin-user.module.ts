import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ManageUsersComponent,
  ]
})
export class AdminUserModule { }
