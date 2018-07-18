import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesOnSaleComponent } from './components/houses-on-sale/houses-on-sale.component';
import { HouseThumbComponent } from './components/house-thumb/house-thumb.component';
import { BasicAmapComponent } from './components/basic-amap/basic-amap.component';
import { ShowProjectComponent } from './components/show-project/show-project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ShowProjectComponent,
    ProjectInfoComponent,
    HouseThumbComponent,
    ProjectDetailComponent,
    HousesOnSaleComponent,
    BasicAmapComponent,
  ],
  exports: [
    ProjectInfoComponent,
    HouseThumbComponent,
    ProjectDetailComponent,
    HousesOnSaleComponent,
    BasicAmapComponent,
  ]
})
export class ProjectModule { }
