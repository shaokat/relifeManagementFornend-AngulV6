import { Organization } from './../organization-create/organization-create.component';
import { OrganizationService } from './../services/organization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-show',
  templateUrl: './organization-show.component.html',
  styleUrls: ['./organization-show.component.css']
})
export class OrganizationShowComponent implements OnInit {

  organizations: Organization[];
  constructor(private service: OrganizationService) { }

  ngOnInit() {
    this.service.getAll('/all')
    .subscribe(val => this.organizations = <Organization[]> val);
  }

  deleteOrg(id: number) {
    this.service.delete('/delete', id);
  }

}
