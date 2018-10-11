import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canActivate(route,state: RouterStateSnapshot){
    if(this.authService.isLoggedIn()) 
      return true
    this.router.navigate(['/login'],{queryParams:
    {returnUrl:state.url}})
    return false
  }

}
