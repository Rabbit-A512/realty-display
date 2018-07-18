import { Carousel } from 'shared/models/carousel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.css']
})
export class MyCarouselComponent implements OnInit {

  @Input() carousels: Carousel[];
  @Input() isProjectCarousel: boolean;

  constructor() {}

  ngOnInit() {
  }
}
