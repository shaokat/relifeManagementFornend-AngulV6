import { Component, OnInit, ViewChild } from '@angular/core';
import { ReliefService } from '../services/relief.serivice';
import { DisasterRecord } from '../disaster-create/disaster-create.component';
import { DisasterService } from '../services/disaster.service';
import { Organization } from '../organization-create/organization-create.component';
import { OrganizationService } from '../services/organization.service';

import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import {combineLatest} from "rxjs/index";
@Component({
  selector: 'app-relief-record-show',
  templateUrl: './relief-record-show.component.html',
  styleUrls: ['./relief-record-show.component.css']
})
export class ReliefRecordShowComponent implements OnInit {
  relief:any[]
  reliefRecord:any[]
  dataSource
  reliefType
  fromDate
  toDate
  disasters: DisasterRecord[];  
  selectedDisaster
  organizations: Organization[];
  selectedOrganization
  displayedColumns : string[]; 
  constructor(
    private serivice: ReliefService,
    private disasterService: DisasterService,
    private orgService: OrganizationService
  ) { 
    this.reliefType="item";
    if(this.reliefType= "item"){
      this.displayedColumns  = ["Organization","Place","Date of Distribution",
      "Disaster Name","type","item name","IAmount","NoOFPeople"];
  }
 
}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    // let MyDate = new Date();
    // this.fromDate =MyDate.getFullYear()+'-'+('0' + (MyDate.getMonth()+1)).slice(-2)
    // +'-'+('0' + MyDate.getDate()).slice(-2);
    // this.toDate =MyDate.getFullYear()+'-'+('0' + (MyDate.getMonth()+1)).slice(-2)
    // +'-'+('0' + (MyDate.getDate()+2)).slice(-2) 

    this.serivice.getAll("/all")
    .subscribe(records =>
      {this.relief=records;
       this.intializeWithTsDate();
       console.log(this.relief)
       this.reliefRecord = this.relief
      .filter(
        rf => rf.type.type === this.reliefType);
        this.dataSource = new MatTableDataSource(this.reliefRecord);
        this.dataSource.paginator = this.paginator;
        //this.getByType();
      });
      combineLatest([
        this.orgService.getAll('/all'),
        this.disasterService.getAll('/all')
      ])
      .subscribe(combined => {
        this.organizations =<Organization[]>  combined[0];
        this.disasters = <DisasterRecord[]> combined[1]
      });
      

   
   
  }
  getByType(){
    console.log("tds")
    this.reliefRecord = this.relief
    .filter(
      rf => rf.type.type === this.reliefType);
      this.dataSource = new MatTableDataSource(this.reliefRecord);
       this.dataSource.paginator = this.paginator;

       if(this.reliefType == "money"){
        this.displayedColumns  = ["Organization","Place","Date of Distribution",
          "Disaster Name","type","amount","NoOFPeople"];
      }
      else if(this.reliefType= "item"){
        this.displayedColumns  = ["Organization","Place","Date of Distribution",
        "Disaster Name","type","item name","IAmount","NoOFPeople"];
    }
    }
    intializeWithTsDate(){
      this.relief.forEach(reliefRecord => {
        let newdate = new Date(reliefRecord.timestamp.year,
          reliefRecord.timestamp.monthValue-1,
          reliefRecord.timestamp.dayOfMonth);
          reliefRecord["dod"]=newdate;
      });
    }

    getByDateRange(){
      console.log(this.fromDate)
      this.fromDate = new Date(this.fromDate).setHours(0,0,0,0);
      console.log(this.fromDate)
      this.toDate = new Date(this.toDate).setHours(0,0,0,0)
      console.log(this.fromDate)

      this.reliefRecord = this.relief
      .filter(rf =>  ( rf.dod >= this.fromDate && rf.dod <= this.toDate)
       && rf.type.type === this.reliefType);
      

    }
    getByDisaster(){
      console.log(this.selectedDisaster)
      this.reliefRecord = this.relief
      .filter(rf => (rf.disaster.name === this.selectedDisaster)
        && rf.type.type === this.reliefType);
    }
    getByOrganization(){
      console.log(this.selectedOrganization);
      
      this.reliefRecord = this.relief
      .filter(rf => (rf.organization.nameAcronym === this.selectedOrganization)
      && rf.type.type === this.reliefType);
    }
    combineSearch(){
      this.fromDate = new Date(this.fromDate).setHours(0,0,0,0);
      console.log(this.fromDate)
      this.toDate = new Date(this.toDate).setHours(0,0,0,0)
      this.reliefRecord = this.relief
      .filter(rf => (rf.disaster.name === this.selectedDisaster)
        && (rf.type.type === this.reliefType) && ( rf.dod >= this.fromDate && rf.dod <= this.toDate)
        && (rf.organization.nameAcronym === this.selectedOrganization))

    }

}
