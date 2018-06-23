import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShowProjectComponent } from './show-project/show-project.component';
import { ShowHouseComponent } from './show-house/show-house.component';

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
