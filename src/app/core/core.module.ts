import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProjectThumbComponent } from './components/project-thumb/project-thumb.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ProjectThumbComponent,
  ],
  exports: [
    ProjectThumbComponent
  ]
})
export class CoreModule { }
