import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AreaService extends DataService {
  constructor(http: Http) {
    super('https://relief-management.herokuapp.com/areas', http);
   }
}
