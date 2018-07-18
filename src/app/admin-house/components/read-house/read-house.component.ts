import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { HouseService } from '../../../shared/services/house.service';
import { ProjectService } from '../../../shared/services/project.service';
import { House } from '../../../shared/models/house';

@Component({
  selector: 'app-read-house',
  templateUrl: './read-house.component.html',
  styleUrls: ['./read-house.component.css']
})
export class ReadHouseComponent implements OnInit {
  houses: House[] = [];
  house_ids: string[];
  project_id = '';
  project_name = '';
  modal: NgbModalRef;

  constructor(
    private houseService: HouseService,
    private projectService: ProjectService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  loadHouseTypes() {
    this.houses = [];
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        this.project_id = params.get('project_id');
        this.projectService.getOneById(this.project_id)
          .subscribe(project => {
            this.project_name = project['name'];
            for (let i = 0; i < project['house_type_ids'].length; i++) {
              this.houseService.getOneById(project['house_type_ids'][i])
                .subscribe(house => {
                  this.houses.push(house as House);
                });
            }
          });
      });
  }

  ngOnInit() {
    this.loadHouseTypes();
  }

  open(content) {
    this.modal = this.modalService.open(content);
  }

  delete_house(id) {
    this.houseService.delete(id)
      .subscribe(deleted_house => {
        this.modal.close();
        this.loadHouseTypes();
      });
  }

}
