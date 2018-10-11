import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navar-component',
  templateUrl: './navar-component.component.html',
  styleUrls: ['./navar-component.component.css']
})
export class NavarComponentComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
