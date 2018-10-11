import { Component, OnInit,ViewChild } from '@angular/core';
import { AreaService } from '../services/division.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
@Component({
  selector: 'app-upazilla-show',
  templateUrl: './upazilla-show.component.html',
  styleUrls: ['./upazilla-show.component.css']
})
export class UpazillaShowComponent implements OnInit {

  divisions: any[];
  districts: any[];
  upazillas: any[];
  displayedColumns : string[] = ["id","name"];
  dataSource
  constructor(private service: AreaService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    .subscribe(upazillas =>{
      this.dataSource = new MatTableDataSource(upazillas);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
