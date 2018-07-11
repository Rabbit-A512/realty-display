import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { HouseInfoComponent } from './house-info/house-info.component';
import { HouseThumbComponent } from './house-thumb/house-thumb.component';
import { HousesOnSaleComponent } from './houses-on-sale/houses-on-sale.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectThumbComponent } from './project-thumb/project-thumb.component';
import { ReasonComponent } from './reason/reason.component';
import { ShowHouseComponent } from './show-house/show-house.component';
import { ShowProjectComponent } from './show-project/show-project.component';
import { TagComponent } from './tag/tag.component';
import { BasicAmapComponent } from './basic-amap/basic-amap.component';
import { NgxAmapModule } from 'ngx-amap';
import { AppErrorHandler } from './services/errors/app-error-handler';

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
    TagComponent,
    HousesOnSaleComponent,
    ProjectThumbComponent,
    HouseInfoComponent,
    HouseDetailComponent,
    BasicAmapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminModule,
    NgbModule.forRoot(),
    NgxAmapModule.forRoot({
      apiKey: '1ee4d9125af0e866f26959c50a42fc9c'
    })
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
