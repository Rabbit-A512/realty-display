import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseInfoComponent } from './components/house-info/house-info.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { ShowHouseComponent } from './components/show-house/show-house.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HouseInfoComponent,
    HouseDetailComponent,
    ShowHouseComponent,
  ],
  exports: [
    HouseInfoComponent,
    HouseDetailComponent,
  ]
})
export class HouseModule { }
