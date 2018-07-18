import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAmapModule } from 'ngx-amap';
import { AppErrorHandler } from 'shared/errors/app-error-handler';
import { SharedModule } from 'shared/shared.module';
import { HouseModule } from './house/house.module';
import { ProjectModule } from './project/project.module';
import { CoreModule } from './core/core.module';

import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh-Hans';

registerLocaleData(localeZh, 'zh-Hans');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SharedModule,
    HouseModule,
    ProjectModule,
    CoreModule,
    NgbModule.forRoot(),
    NgxAmapModule.forRoot({
      apiKey: '1ee4d9125af0e866f26959c50a42fc9c'
    })
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
