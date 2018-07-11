import { SharedModule } from 'shared/shared.module';
import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxAmapModule } from 'ngx-amap';
import { QuillModule } from 'ngx-quill';
import { ShowAmapComponent } from './show-amap/show-amap.component';

import { HouseService } from './../services/house.service';
import { ProjectService } from './../services/project.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HouseCarouselComponent } from './house-carousel/house-carousel.component';
import { ManageCarouselComponent } from './manage-carousel/manage-carousel.component';
import { ManageHousesComponent } from './manage-houses/manage-houses.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { NewHouseComponent } from './new-house/new-house.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectCarouselComponent } from './project-carousel/project-carousel.component';
import { ReadHouseComponent } from './read-house/read-house.component';
import { ReadProjectComponent } from './read-project/read-project.component';
import { SearchComponent } from './search/search.component';
import { TagEditorComponent } from './tag-editor/tag-editor.component';
import { UpdateHouseComponent } from './update-house/update-house.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    QuillModule,
    FileUploadModule,
    NgxAmapModule.forRoot({
      apiKey: '1ee4d9125af0e866f26959c50a42fc9c'
    })
  ],
  declarations: [
    AdminHomeComponent,
    ManageProjectsComponent,
    ManageHousesComponent,
    ManageCarouselComponent,
    SearchComponent,
    NewProjectComponent,
    EditProjectComponent,
    ReadProjectComponent,
    UpdateProjectComponent,
    NewHouseComponent,
    ReadHouseComponent,
    UpdateHouseComponent,
    EditHouseComponent,
    TagEditorComponent,
    ProjectCarouselComponent,
    HouseCarouselComponent,
    HomeCarouselComponent,
    ShowAmapComponent,
    LoginComponent
],
  exports: [
    AdminHomeComponent
  ],
  providers: [
    ProjectService,
    HouseService
  ]
})
export class AdminModule { }
