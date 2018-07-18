import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared/shared.module';
import { ManageCarouselComponent } from './components/manage-carousel/manage-carousel.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { HouseCarouselComponent } from './components/house-carousel/house-carousel.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ManageCarouselComponent,
    ProjectCarouselComponent,
    HouseCarouselComponent,
    HomeCarouselComponent,
  ]
})
export class AdminCarouselModule { }
