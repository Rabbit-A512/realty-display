import { Carousel } from './../models/carousel';
import { CarouselService } from './../services/carousel.service';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppError } from '../services/errors/app-error';
import { NotFound } from '../services/errors/not-found';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: any;
  shown_carousels: Carousel[] = [];
  haveCarousels = false;
  params = null;

  constructor(
    private projectService: ProjectService,
    private carouselService: CarouselService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projectService.getAll()
      .subscribe(projects => {
        this.projects = projects;
      });
    this.carouselService.shownCarousels
      .subscribe((carousels: Carousel[]) => {
        this.haveCarousels = carousels.length !== 0;
        this.shown_carousels = carousels as Carousel[];
      }, (error: AppError) => {
        if (error instanceof NotFound) {
          this.haveCarousels = false;
        }
      });
    this.route.queryParamMap
      .subscribe(params => {
        if (params) {
          console.log(params);
          this.params = params;
        }
      });
  }

}
