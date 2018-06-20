import { UpdateProjectComponent } from './update-project/update-project.component';
import { ReadProjectComponent } from './read-project/read-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageCarouselComponent } from './manage-carousel/manage-carousel.component';
import { ManageHousesComponent } from './manage-houses/manage-houses.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { NewProjectComponent } from './new-project/new-project.component';

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
        component: ManageHousesComponent
      },
      {
        path: 'manage-carousel',
        component: ManageCarouselComponent
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
