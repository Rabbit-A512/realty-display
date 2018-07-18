import { NgxAmapModule } from 'ngx-amap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCarouselComponent } from 'shared/components/my-carousel/my-carousel.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from 'shared/services/carousel.service';
import { HouseService } from 'shared/services/house.service';
import { ProjectService } from 'shared/services/project.service';
import { MessageService } from 'shared/services/message.service';
import { ReasonComponent } from 'shared/components/reason/reason.component';
import { TagComponent } from 'shared/components/tag/tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SummaryPipe } from './pipes/summary.pipe';
import { TagEditorComponent } from 'shared/components/tag-editor/tag-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    QuillModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxAmapModule.forRoot({
      apiKey: '1ee4d9125af0e866f26959c50a42fc9c'
    })
  ],
  declarations: [
    MyCarouselComponent,
    ReasonComponent,
    TagComponent,
    SummaryPipe,
    TagEditorComponent,
  ],
  exports: [
    MyCarouselComponent,
    ReasonComponent,
    TagComponent,
    TagEditorComponent,
    SummaryPipe,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxAmapModule,
    QuillModule,
    FileUploadModule,
  ],
  providers: [
    CarouselService,
    HouseService,
    ProjectService,
    MessageService
  ]
})
export class SharedModule { }
