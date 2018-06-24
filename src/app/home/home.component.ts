import { Carousel } from './../models/carousel';
import { CarouselService } from './../services/carousel.service';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: any;
  shown_carousels: Carousel[] = [];

  constructor(
    private projectService: ProjectService,
    private carouselService: CarouselService
  ) { }

  ngOnInit() {
    this.projectService.getAll()
      .subscribe(projects => {
        this.projects = projects;
      });
    this.carouselService.shownCarousels
      .subscribe(carousels => {
        this.shown_carousels = carousels as Carousel[];
      });
  }

}
