import { Component, OnInit } from '@angular/core';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { AreaService } from './../services/division.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-district-create',
  templateUrl: './district-create.component.html',
  styleUrls: ['./district-create.component.css']
})
export class DistrictCreateComponent implements OnInit {
divisions: any[];
  constructor(private service: AreaService) { }

  ngOnInit() {
    this.service.getAll('/divisions')
    .subscribe(divisions => this.divisions = divisions);
  }
  crateDistrict(input) {
    const division = input.value.divisionName;
    const district = { name: input.value.districtName };
    input.value.districtName = '';
    console.log(division)
    this.service.create(district, ['/division', '/district'], division);
  }

}
