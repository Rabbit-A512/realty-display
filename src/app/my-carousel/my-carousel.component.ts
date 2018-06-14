import { Component, OnInit } from '@angular/core';

import { CarouselService } from './../services/carousel.service';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.css']
})
export class MyCarouselComponent implements OnInit {
  images: Array<string>;

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.carouselService.getImages()
        .subscribe(images => this.images = images);
  }
}
