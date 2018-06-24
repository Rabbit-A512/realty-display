import { NgxAmapModule } from 'ngx-amap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgxAmapModule.forRoot({
      apiKey: '1ee4d9125af0e866f26959c50a42fc9c'
    })
  ],
  declarations: [],
  exports: [
    NgxAmapModule.forRoot({
      apiKey: '1ee4d9125af0e866f26959c50a42fc9c'
    }).ngModule
  ]
})
export class SharedModule { }
