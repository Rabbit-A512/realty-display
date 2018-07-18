import { SharedModule } from 'shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';
import { ShowAmapComponent } from '../admin-project/components/show-amap/show-amap.component';

import { HouseService } from 'shared/services/house.service';
import { ProjectService } from 'shared/services/project.service';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditHouseComponent } from '../admin-house/components/edit-house/edit-house.component';
import { EditProjectComponent } from '../admin-project/components/edit-project/edit-project.component';
import { HomeCarouselComponent } from '../admin-carousel/components/home-carousel/home-carousel.component';
import { HouseCarouselComponent } from '../admin-carousel/components/house-carousel/house-carousel.component';
import { ManageCarouselComponent } from '../admin-carousel/components/manage-carousel/manage-carousel.component';
import { ManageHousesComponent } from '../admin-house/components/manage-houses/manage-houses.component';
import { ManageProjectsComponent } from '../admin-project/components/manage-projects/manage-projects.component';
import { NewHouseComponent } from '../admin-house/components/new-house/new-house.component';
import { NewProjectComponent } from '../admin-project/components/new-project/new-project.component';
import { ProjectCarouselComponent } from '../admin-carousel/components/project-carousel/project-carousel.component';
import { ReadHouseComponent } from '../admin-house/components/read-house/read-house.component';
import { ReadProjectComponent } from '../admin-project/components/read-project/read-project.component';
import { TagEditorComponent } from '../shared/components/tag-editor/tag-editor.component';
import { UpdateHouseComponent } from '../admin-house/components/update-house/update-house.component';
import { UpdateProjectComponent } from '../admin-project/components/update-project/update-project.component';
import { LoginComponent } from './components/login/login.component';
import { ManageMessagesComponent } from '../admin-message/components/manage-messages/manage-messages.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AllMessagesComponent } from '../admin-message/components/all-messages/all-messages.component';
import { SomeMessagesComponent } from '../admin-message/components/some-messages/some-messages.component';
import { ShowMessagesComponent } from '../admin-message/components/show-messages/show-messages.component';
import { ManageUsersComponent } from '../admin-user/components/manage-users/manage-users.component';
import { SearchMessagesComponent } from '../admin-message/components/search-messages/search-messages.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { AdminUserModule } from '../admin-user/admin-user.module';
import { AdminHouseModule } from '../admin-house/admin-house.module';
import { AdminProjectModule } from '../admin-project/admin-project.module';
import { AdminMessageModule } from '../admin-message/admin-message.module';
import { AdminCarouselModule } from '../admin-carousel/admin-carousel.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AdminUserModule,
    AdminHouseModule,
    AdminProjectModule,
    AdminMessageModule,
    AdminCarouselModule
  ],
  declarations: [
    AdminHomeComponent,

    LoginComponent,
    ChangePasswordComponent,
],
  exports: [
  ],
  providers: [
    AuthGuard,
    AuthService,
  ]
})
export class AdminModule { }
