import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

import { ProjectService } from './../services/project.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ManageCarouselComponent } from './manage-carousel/manage-carousel.component';
import { ManageHousesComponent } from './manage-houses/manage-houses.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ReadProjectComponent } from './read-project/read-project.component';
import { SearchComponent } from './search/search.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    QuillModule
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
  ],
  exports: [
    AdminHomeComponent
  ],
  providers: [
    ProjectService
  ]
})
export class AdminModule { }
