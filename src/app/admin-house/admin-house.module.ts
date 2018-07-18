import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditHouseComponent } from './components/edit-house/edit-house.component';
import { SharedModule } from 'shared/shared.module';
import { ManageHousesComponent } from './components/manage-houses/manage-houses.component';
import { NewHouseComponent } from './components/new-house/new-house.component';
import { ReadHouseComponent } from './components/read-house/read-house.component';
import { UpdateHouseComponent } from './components/update-house/update-house.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    EditHouseComponent,
    ManageHousesComponent,
    NewHouseComponent,
    ReadHouseComponent,
    UpdateHouseComponent,
  ],
  exports: [
    EditHouseComponent,
  ]
})
export class AdminHouseModule { }
