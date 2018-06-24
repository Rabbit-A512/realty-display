import { HouseService } from './../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

import { House } from '../../models/house';
import { CarouselService } from '../../services/carousel.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-house-carousel',
  templateUrl: './house-carousel.component.html',
  styleUrls: ['./house-carousel.component.css']
})
export class HouseCarouselComponent implements OnInit {

  house: House;
  private options: FileUploaderOptions;
  uploader: FileUploader;

  constructor(
    private houseService: HouseService,
    private carouselService: CarouselService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.options = {
          url: `http://120.78.187.115:5000/api/house_type_images/${params.get('house_type_id')}`,
          itemAlias: 'image'
        };
        this.uploader = new FileUploader(this.options);
      });
    this.load_carousels();
  }

  load_carousels() {
    this.route.paramMap
      .subscribe(params => {
        this.houseService.getOneById(params.get('house_type_id'))
          .subscribe(house => {
            this.house = house as House;
          });
      });
  }

  deleteImage(image_id: string) {
    this.carouselService.deleteHouseCarousel(image_id)
      .subscribe(deleted => {
        this.load_carousels();
      });
  }

}
