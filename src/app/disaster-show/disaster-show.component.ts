import { AppError } from './../common/app-error';
import { DisasterRecord } from './../disaster-create/disaster-create.component';
import { DisasterService } from './../services/disaster.service';
import { Component,ViewChild, OnInit } from '@angular/core';
import { Router, ɵROUTER_PROVIDERS } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-disaster-show',
  templateUrl: './disaster-show.component.html',
  styleUrls: ['./disaster-show.component.css']
})
export class DisasterShowComponent implements OnInit {
  constructor(private service: DisasterService) { }
  dataSource

  displayedColumns: string[] = ["name",'type','Date of Occurance'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.service.getAll('/all')
      .subscribe(disaster => {
        console.log(disaster);
        this.dataSource = new MatTableDataSource(disaster);
        this.dataSource.paginator = this.paginator


      });


  }

}
