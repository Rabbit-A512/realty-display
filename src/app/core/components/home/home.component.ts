import { Carousel } from 'shared/models/carousel';
import { CarouselService } from 'shared/services/carousel.service';
import { ProjectService } from 'shared/services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppError } from 'shared/errors/app-error';
import { NotFound } from 'shared/errors/not-found';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

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
    private route: ActivatedRoute,
    private modalService: NgbModal
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

  openConfirmModal(confirm) {
    this.modalService.open(confirm, { centered: true });
  }

}
