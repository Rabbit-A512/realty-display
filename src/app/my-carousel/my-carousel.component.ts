import { Carousel } from './../models/carousel';
import { Component, OnInit, Input } from '@angular/core';

import { CarouselService } from './../services/carousel.service';


@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.css']
})
export class MyCarouselComponent implements OnInit {

  @Input() carousels: Carousel[];

  constructor() {}

  ngOnInit() {
  }
}
