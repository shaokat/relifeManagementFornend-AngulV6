import { OrganizationService } from './../services/organization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.css']
})
export class OrganizationCreateComponent implements OnInit {
  private input: Organization = new Organization();
  orgName: string;
  orgAcm: string;
  orgType: string[];
  selectedType: string;
  description: string;
  constructor(private service: OrganizationService) { }

  ngOnInit() {
    this.service.getAll('/types')
    .subscribe(val => this.orgType = <string[]>val);
  }
  createOrg(form) {
    this.input.name = this.orgName;
    this.input.nameAcronym = this.orgAcm;
    this.input.orgLevel = this.selectedType;
    this.input.description = this.description;

    this.service.createWithoutID(this.input, '/add');
  }

}

export class Organization {
  id: number;
  name: string;
  nameAcronym: string;
  orgLevel: string;
  description: string;

  constructor() {}

}
