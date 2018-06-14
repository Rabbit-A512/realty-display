import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { ShowProjectComponent } from './show-project/show-project.component';
import { HomeComponent } from './home/home.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ReasonComponent } from './reason/reason.component';
import { ShowHouseComponent } from './show-house/show-house.component';
import { HouseThumbComponent } from './house-thumb/house-thumb.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TagComponent } from './tag/tag.component';

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
    path: 'project',
    component: ShowProjectComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyCarouselComponent,
    ShowProjectComponent,
    HomeComponent,
    ProjectInfoComponent,
    ReasonComponent,
    ShowHouseComponent,
    HouseThumbComponent,
    ProjectDetailComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
