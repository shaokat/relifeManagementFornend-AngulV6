import { DisasterRecord } from './../disaster-create/disaster-create.component';
import { DisasterService } from './../services/disaster.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disaster-update',
  templateUrl: './disaster-update.component.html',
  styleUrls: ['./disaster-update.component.css']
})
export class DisasterUpdateComponent implements OnInit {

  record: DisasterRecord;
  payload: DisasterRecordupdate;
  disasterType: string[];
  disasterName: String;
  selectedType: string;
  description: string;
  dateOfOccurance: string;
  recordId: number;
  constructor(private service: DisasterService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      this.recordId = +param.get('disasterId');
    });

    this.service.getAll('/types')
    .subscribe(type =>  this.disasterType = <string[]> type  );
    this.service.getById('/one', this.recordId)
    .subscribe(rec => {
      this.record = rec;
      this.disasterName = this.record.name;
      this.selectedType = this.record.type;
      this.description = this.record.description;
      this.dateOfOccurance = this.record.dateOfOccurance['year'] + '-' +
                            this.record.dateOfOccurance['monthValue'] + '-' +
                            this.record.dateOfOccurance['dayOfMonth'];
      console.log(this.dateOfOccurance);
    });
  }

  updateDisaster(form) {
    this.payload = new DisasterRecordupdate();
    this.payload.id = this.record.id;
    this.payload.name = this.disasterName;
    this.payload.type = this.selectedType;
    this.payload.description = this.description;
    console.log(this.payload);
    const url = '/update/' + form.value.dateOfOccurance;
    this.service.update(this.payload, url);
  }

}
class DisasterRecordupdate {
  id: number;
  name: String;
  description: string;
  type: string;
  constructor() {}
}
