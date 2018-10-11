import { ActivatedRoute } from '@angular/router';
import { AreaService } from './../services/division.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-union-update',
  templateUrl: './union-update.component.html',
  styleUrls: ['./union-update.component.css']
})
export class UnionUpdateComponent implements OnInit {
  current_union: Union;
  unionId: number;
  all_upazilla: Upazilla[];
  constructor(private service: AreaService, private route: ActivatedRoute) { }
  all_options: any[];
  selectedUpazilla: Upazilla;
  unionName;
  ngOnInit() {

    this.route.paramMap
    .subscribe(params => {
      this.unionId = +params.get('unionId');
     //  console.log(id);
    });

    Observable.combineLatest([
      this.service.getAll('/upazillas'),
      this.service.getById('/union', this.unionId)
    ]).subscribe(combined => {
      this.all_upazilla = <Upazilla[]>combined[0];
      this.current_union = <Union> combined[1];
      this.setSelectedUpazilla();
      this.unionName = this.current_union.name;
    });
   }

   private setSelectedUpazilla() {
    for (const key in this.all_upazilla) {
      if (this.current_union.upazilla.id === this.all_upazilla[key].id) {
        this.selectedUpazilla = this.all_upazilla[key];
      }
    }
   }

   updateUnion() {
     const district = {id: this.unionId, name: this.unionName};
    const url = '/upazilla/' + this.selectedUpazilla.id + '/union/update';
    this.service.update(district, url);
    console.log(this.unionName);
     console.log(this.selectedUpazilla.id);
   }
  }

  interface Upazilla {
    id: number; name: string;
  }
  interface Union {
      id: number; name: string; upazilla: Upazilla;
  }
