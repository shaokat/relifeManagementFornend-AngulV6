import { Component, OnInit,ViewChild } from '@angular/core';
import { AreaService } from '../services/division.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-district-show',
  templateUrl: './district-show.component.html',
  styleUrls: ['./district-show.component.css']
})
export class DistrictShowComponent implements OnInit {

  constructor(private service: AreaService) { }
divisions: any[];
dataSource
displayedColumns : string[] = ["id","name"];
  ngOnInit() {
    this.service.getAll('/divisions')
    .subscribe(divisions => this.divisions = divisions);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  getDistricts(divisoion) {
    this.service.getAllById(['/division', '/districts'], divisoion)
    .subscribe(districts =>{
       this.dataSource = new MatTableDataSource(districts);
       this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
