import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import 'rxjs/add/operator/map'; 
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: any;
  userList: string[]; 
  defaultRole = 'user';
  constructor(private http: Http, private router: Router) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) { 
   return this.http.post('https://relief-management.herokuapp.com/users/authenticate', credentials)
    .map(response => {
      let result = response.json();
      console.log(result)
      if (result && result.token) {
        localStorage.setItem('token', result.token);

        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true; 
      }
      else return false; 
    });
  }
  signup(form){
    let user = {
      username: form.value.userName, 
      password: form.value.password, 
      role: this.defaultRole
    };

    this.http.post('https://relief-management.herokuapp.com/users/sign-up', user)
    .subscribe(temp =>  this.router.navigate(['login']));
  }
   getlAllUser(){
    return this.http.get('https://relief-management.herokuapp.com/users/all');
    
  }

  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigate(['login']);
  }

  getCurrentUser() {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
    return this.currentUser;
  }

  isAdmin() {
    return this.currentUser.role === 'admin';
 }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}

