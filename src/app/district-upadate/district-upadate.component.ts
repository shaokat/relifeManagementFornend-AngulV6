import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AreaService } from '../services/division.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-district-upadate',
  templateUrl: './district-upadate.component.html',
  styleUrls: ['./district-upadate.component.css']
})
export class DistrictUpadateComponent implements OnInit {
  current_district: District;
  districtId: number;
  all_divison: Division[];
  constructor(private service: AreaService, private route: ActivatedRoute) { }
  all_options: any[];
  selectedDivision: Division;
  districtName;
  ngOnInit() {

    this.route.paramMap
    .subscribe(params => {
      this.districtId = +params.get('districtId');
     //  console.log(id);
    });

    Observable.combineLatest([
      this.service.getAll('/divisions'),
      this.service.getById('/district', this.districtId)
    ]).subscribe(combined => {
      this.all_divison = <Division[]>combined[0];
      this.current_district = <District> combined[1];
      this.setSelectedDivision();
      this.districtName = this.current_district.name;
    });
   }

   private setSelectedDivision() {
    for (const key in this.all_divison) {
      if (this.current_district.division.id === this.all_divison[key].id) {
        this.selectedDivision = this.all_divison[key];
      }
    }
   }

   updateDistrict() {
     const district = {id: this.districtId, name: this.districtName};
    const url = '/division/' + this.selectedDivision.id + '/district/update';
    this.service.update(district, url);
    console.log(this.districtName);
     console.log(this.selectedDivision.id);
   }
  }

  interface Division {
    id: number; name: string;
  }
  interface District {
      id: number; name: string; division: Division;
  }
