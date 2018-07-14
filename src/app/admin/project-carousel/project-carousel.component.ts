import { CarouselService } from './../../services/carousel.service';
import { Project } from './../../models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css']
})
export class ProjectCarouselComponent implements OnInit {

  project: Project;
  private options: FileUploaderOptions;
  uploader: FileUploader;

  constructor(
    private projectService: ProjectService,
    private carouselService: CarouselService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.options = {
          url: `http://120.78.187.115:5000/api/project_images/${params.get('project_id')}`,
          itemAlias: 'image',
          authTokenHeader: 'x-auth-token',
          authToken: localStorage.getItem('token') ? localStorage.getItem('token') : ''
        };
        this.uploader = new FileUploader(this.options);
        this.uploader.onErrorItem = (item, response, status1, headers) => {
          if (status1 === 401) {
            this.router.navigate(['/admin/login']);
          }
        };
        this.uploader.onCompleteAll = () => {
          this.load_carousels();
        };
      });
    this.load_carousels();
  }

  load_carousels() {
    this.route.paramMap
      .subscribe(params => {
        this.projectService.getOneById(params.get('project_id'))
          .subscribe(project => {
            this.project = project as Project;
          });
      });
  }

  deleteImage(image_id: string) {
    this.carouselService.deleteProjectCarousel(image_id)
      .subscribe(deleted => {
        this.load_carousels();
      });
  }

}
