import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canActivate(route,state: RouterStateSnapshot){
    if(!this.authService.isLoggedIn()) 
      return true
    this.router.navigate(['/'])
    return false
  }

}
