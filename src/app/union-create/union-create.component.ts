import { AreaService } from './../services/division.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-union-create',
  templateUrl: './union-create.component.html',
  styleUrls: ['./union-create.component.css']
})
export class UnionCreateComponent implements OnInit {

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

  getUpazillas(distId) {
    console.log('method called with ' + distId);
    this.service
    .getAllById(['/district', '/upazillas'], distId)
    .subscribe(upazillas => this.upazillas = upazillas);
  }

  createUnion(form) {
    const upazilla = form.value.upazilla;
    const union = {name: form.value.unionName};
    this.service.create(union, ['/upazilla', '/union'], upazilla);
  }

}
