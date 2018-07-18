import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './core/components/home/home.component';
import { ShowProjectComponent } from './project/components/show-project/show-project.component';
import { ShowHouseComponent } from './house/components/show-house/show-house.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: 'project/:project_id',
    component: ShowProjectComponent
  },
  {
    path: 'house/:house_id',
    component: ShowHouseComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
