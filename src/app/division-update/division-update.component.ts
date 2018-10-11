import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AreaService } from '../services/division.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-division-update',
  templateUrl: './division-update.component.html',
  styleUrls: ['./division-update.component.css']
})
export class DivisionUpdateComponent implements OnInit {
  constructor(private service: AreaService, private rooute: ActivatedRoute) { }
  divisiond: any;
  divisionId: number;
  current_options: any[];
  all_options: any[];

  ngOnInit() {
    this.rooute.paramMap
    .subscribe(params => {
      this.divisionId = +params.get('divisionId');
     //  console.log(id);
    });
    this.service.getById('/division', this.divisionId)
    .subscribe(division => this.divisiond = division);
    console.log(this.divisiond);
  }
  upadateDivision(divisionName: NgForm) {
    const division = {id: this.divisionId, name: divisionName.value };
    this.service.update(division, '/division/update');
    console.log( division );
  }


}
