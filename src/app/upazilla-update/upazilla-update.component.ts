import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AreaService } from '../services/division.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-upazilla-update',
  templateUrl: './upazilla-update.component.html',
  styleUrls: ['./upazilla-update.component.css']
})
export class UpazillaUpdateComponent implements OnInit {

  current_upazilla: Upazilla;
  upazillaId: number;
  all_district: District[];
  constructor(private service: AreaService, private route: ActivatedRoute) { }
  all_options: any[];
  selectedDistrict: District;
  upazillaName;
  ngOnInit() {

    this.route.paramMap
    .subscribe(params => {
      this.upazillaId = +params.get('upazillaId');
     //  console.log(id);
    });

    Observable.combineLatest([
      this.service.getAll('/districts'),
      this.service.getById('/upazilla', this.upazillaId)
    ]).subscribe(combined => {
      this.all_district = <District[]>combined[0];
      this.current_upazilla = <Upazilla> combined[1];
      this.setSelectedDistrict();
      this.upazillaName = this.current_upazilla.name;
    });
   }

   private setSelectedDistrict() {
    for (const key in this.all_district) {
      if (this.current_upazilla.district.id === this.all_district[key].id) {
        this.selectedDistrict = this.all_district[key];
      }
    }
   }

   updateDistrict() {
     const district = {id: this.upazillaId, name: this.upazillaName};
    const url = '/district/' + this.selectedDistrict.id + '/upazilla/update';
    this.service.update(district, url);
    console.log(this.upazillaName);
     console.log(this.selectedDistrict.id);
   }
  }

  interface District {
    id: number; name: string;
  }
  interface Upazilla {
      id: number; name: string; district: District;
  }

