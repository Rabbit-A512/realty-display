import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared/shared.module';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ShowAmapComponent } from './components/show-amap/show-amap.component';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';
import { ReadProjectComponent } from './components/read-project/read-project.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    EditProjectComponent,
    ShowAmapComponent,
    ManageProjectsComponent,
    NewProjectComponent,
    ReadProjectComponent,
    UpdateProjectComponent,
  ],
  exports: [
    EditProjectComponent,
  ]
})
export class AdminProjectModule { }
