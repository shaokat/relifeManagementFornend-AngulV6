import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AreaService } from './../services/division.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { observable } from 'rxjs';

export interface Division {
  id: Number;
  name: string;
}


@Component({
  selector: 'app-division-show',
  templateUrl: './division-show.component.html',
  styleUrls: ['./division-show.component.css']
})
export class DivisionShowComponent implements OnInit {
  constructor(private service: AreaService) { }
  dataSource;

  displayedColumns: string[] = ["id", "name"];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.service.getAll('/divisions')
      .subscribe(divisions => {
        console.log(divisions);
        this.dataSource = new MatTableDataSource(divisions);
        this.dataSource.paginator = this.paginator


      });


  }

  //   ngAfterViewInit() {
  //     this.dataSource.paginator = this.paginator;
  // }
}


