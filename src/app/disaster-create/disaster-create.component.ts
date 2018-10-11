import { DisasterService } from './../services/disaster.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
@Component({
  selector: 'app-disaster-create',
  templateUrl: './disaster-create.component.html',
  styleUrls: ['./disaster-create.component.css']
})
export class DisasterCreateComponent implements OnInit {

  disasterType: string[];
  myModal
  responseStatus
  display = false;
  tst = 'modal'
  description: string;
  selectedType: string;
  distasterName: string;
  public dateOfOccurance: string;
  record: DisasterRecord = new DisasterRecord();

  constructor(private service: DisasterService) { }

  ngOnInit() {
    this.service.getAll('/types')
    .subscribe(type =>  this.disasterType = type  );
    this.description = 'intial';
    this.selectedType = 'Thunderstorms';
    let MyDate = new Date();
    this.dateOfOccurance =MyDate.getFullYear()+'-'+('0' + (MyDate.getMonth()+1)).slice(-2)
    +'-'+('0' + MyDate.getDate()).slice(-2) 
  }

  createDisaster(form) {
    this.record.name = this.distasterName;
    this.record.type = this.selectedType;
    this.record.description = this.description;

    this.service.createWithDateString(this.record, '/save', this.dateOfOccurance)
     .subscribe(response => {this.responseStatus = response.status
       if(this.responseStatus == 201){this.display=true }
       else{ this.display= false} console.log(this.display)});

    this.distasterName = '';
    this.selectedType = '';
    this.dateOfOccurance = '';
    this.description = '';
  }
  openModel() {
    this.myModal.nativeElement.className = 'modal fade show';
  }
  closeModel() {
     this.myModal.nativeElement.className = 'modal hide';
  }

}
export class DisasterRecord {
  id: number;
  name: String;
  type: string;
  description: string;
  dateOfOccurance: {};
  constructor() {}
}

