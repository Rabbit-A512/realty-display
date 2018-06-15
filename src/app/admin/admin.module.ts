import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ManageHousesComponent } from './manage-houses/manage-houses.component';
import { ManageCarouselComponent } from './manage-carousel/manage-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { QuillModule } from 'ngx-quill';
import { ReadProjectComponent } from './read-project/read-project.component';

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
  ],
  exports: [
    AdminHomeComponent
  ]
})
export class AdminModule { }
