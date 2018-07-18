import { HomeCarouselComponent } from '../admin-carousel/components/home-carousel/home-carousel.component';
import { HouseCarouselComponent } from '../admin-carousel/components/house-carousel/house-carousel.component';
import { ReadHouseComponent } from '../admin-house/components/read-house/read-house.component';
import { UpdateProjectComponent } from '../admin-project/components/update-project/update-project.component';
import { ReadProjectComponent } from '../admin-project/components/read-project/read-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ManageCarouselComponent } from '../admin-carousel/components/manage-carousel/manage-carousel.component';
import { ManageHousesComponent } from '../admin-house/components/manage-houses/manage-houses.component';
import { ManageProjectsComponent } from '../admin-project/components/manage-projects/manage-projects.component';
import { NewProjectComponent } from '../admin-project/components/new-project/new-project.component';
import { NewHouseComponent } from '../admin-house/components/new-house/new-house.component';
import { UpdateHouseComponent } from '../admin-house/components/update-house/update-house.component';
import { ProjectCarouselComponent } from '../admin-carousel/components/project-carousel/project-carousel.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ManageMessagesComponent } from '../admin-message/components/manage-messages/manage-messages.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AllMessagesComponent } from '../admin-message/components/all-messages/all-messages.component';
import { SomeMessagesComponent } from '../admin-message/components/some-messages/some-messages.component';
import { ManageUsersComponent } from '../admin-user/components/manage-users/manage-users.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/manage-projects/read',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent
      },
      {
        path: 'manage-messages',
        component: ManageMessagesComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: '/admin/manage-messages/all',
            pathMatch: 'full'
          },
          {
            path: 'all',
            component: AllMessagesComponent
          },
          {
            path: 'some/:project_id',
            component: SomeMessagesComponent
          }
        ]
      },
      {
        path: 'manage-projects',
        component: ManageProjectsComponent,
        canActivate: [AuthGuard],
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
        canActivate: [AuthGuard],
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
        canActivate: [AuthGuard],
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
