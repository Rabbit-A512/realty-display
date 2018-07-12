import { CarouselService } from './../../services/carousel.service';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  shown_projects: Project[] = [];
  unshown_projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private carouselService: CarouselService
  ) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAll()
      .subscribe(projects => {
        for (let i = 0; i < (projects as Project[]).length; i++) {
          if (!projects[i].carousels[0]) {
            continue;
          }
          if (projects[i].is_show) {
            this.shown_projects.push(projects[i]);
          } else {
            this.unshown_projects.push(projects[i]);
          }
        }
      });
  }

  showCarousel(project: Project) {
    this.carouselService.showHomeCarousel(project.project_id)
      .subscribe(res => {
        this.shown_projects = [];
        this.unshown_projects = [];
        this.loadProjects();
      });
  }

  unshowCarousel(project: Project) {
    this.carouselService.unshowHomeCarousel(project.project_id)
      .subscribe(res => {
        this.shown_projects = [];
        this.unshown_projects = [];
        this.loadProjects();
      });
  }

}
