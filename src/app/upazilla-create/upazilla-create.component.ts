import { AreaService } from './../services/division.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upazilla-create',
  templateUrl: './upazilla-create.component.html',
  styleUrls: ['./upazilla-create.component.css']
})
export class UpazillaCreateComponent implements OnInit {

  divisions: any[];
  districts: any[];
  upazillas: any[];

  constructor(private service: AreaService) { }

  ngOnInit() {
    this.service
    .getAll('/divisions')
    .subscribe(divisions => this.divisions = divisions);
  }

  getDistricts(divId) {
    this.service
    .getAllById(['/division', '/districts'], divId)
    .subscribe(districts => this.districts = districts);
  }

createUpazilla(form) {
    const district = form.value.district;
    const upazilla = {name: form.value.upazillaName};
    this.service.create(upazilla, ['/district', '/upazilla'], district);
  }


}
