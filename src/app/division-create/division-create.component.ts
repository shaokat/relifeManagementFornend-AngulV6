import { Component, OnInit } from '@angular/core';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { AreaService } from './../services/division.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-division-create',
  templateUrl: './division-create.component.html',
  styleUrls: ['./division-create.component.css']
})
export class DivisionCreateComponent implements OnInit {
private divisionName: any;
  constructor(private service: AreaService) { }
  confirmResponse
  ngOnInit() {
    
  }
  createDivison(input: NgForm) {

    const division = { name: input.value };
    console.log(division);
    this.service.createWithoutID(division, '/division')
    .subscribe(resposne => this.confirmResponse = resposne);
    console.log(this.confirmResponse)
  }
  show(divi: NgForm) {
    const division1 = { name: divi.value };
    console.log(division1);
    // console.log(divi.value);
  }
  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }
}