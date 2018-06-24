import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HouseCarouselComponent } from './house-carousel/house-carousel.component';
import { ReadHouseComponent } from './read-house/read-house.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ReadProjectComponent } from './read-project/read-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageCarouselComponent } from './manage-carousel/manage-carousel.component';
import { ManageHousesComponent } from './manage-houses/manage-houses.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewHouseComponent } from './new-house/new-house.component';
import { UpdateHouseComponent } from './update-house/update-house.component';
import { ProjectCarouselComponent } from './project-carousel/project-carousel.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {
        path: 'manage-projects',
        component: ManageProjectsComponent,
        children: [
          {
            path: '',
            redirectTo: '/admin/manage-projects/read',
            pathMatch: 'full'
          },
          {
            path: 'new',
            component: NewProjectComponent
          },
          {
            path: 'read',
            component: ReadProjectComponent
          },
          {
            path: 'update/:project_id',
            component: UpdateProjectComponent
          }
        ]
      },
      {
        path: 'manage-houses',
        component: ManageHousesComponent,
        children: [
          {
            path: 'new/:project_id',
            component: NewHouseComponent
          },
          {
            path: 'read/:project_id',
            component: ReadHouseComponent
          },
          {
            path: 'update/:house_id',
            component: UpdateHouseComponent
          }
        ]
      },
      {
        path: 'manage-carousels',
        component: ManageCarouselComponent,
        children: [
          {
            path: '',
            redirectTo: '/admin/manage-carousels/home',
            pathMatch: 'full'
          },
          {
            path: 'projects/:project_id',
            component: ProjectCarouselComponent
          },
          {
            path: 'houses/:house_type_id',
            component: HouseCarouselComponent
          },
          {
            path: 'home',
            component: HomeCarouselComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
