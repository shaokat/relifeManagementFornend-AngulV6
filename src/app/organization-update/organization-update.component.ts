import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from './../services/organization.service';
import { Organization } from './../organization-create/organization-create.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-update',
  templateUrl: './organization-update.component.html',
  styleUrls: ['./organization-update.component.css']
})
export class OrganizationUpdateComponent implements OnInit {

  recordId: number;
  private input: Organization = new Organization();
  orgName: string;
  orgAcm: string;
  orgType: string[];
  selectedType: string;
  description: string;
  payload: Organization;

  constructor(private service: OrganizationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getAll('/types')
    .subscribe(val => this.orgType = <string[]>val);

    this.route.paramMap.subscribe(param => {
      this.recordId = +param.get('orgId');
    });

    this.service.getById('/one', this.recordId)
    .subscribe(val => {
      this.input = <Organization>val;
      this.orgName = this.input.name;
      this.orgAcm = this.input.nameAcronym;
      this.selectedType = this.input.orgLevel;
      this.description = this.input.description;
    });
    }
    updateOrg(form) {
      this.input.name = this.orgName;
      this.input.orgLevel = this.selectedType;
      this.input.nameAcronym = this.orgAcm;
      this.input.description = this.description;

      this.service.update(this.input, '/update');
    }
  }


