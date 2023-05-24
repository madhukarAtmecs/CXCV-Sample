import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    const isLoggedIn = window.localStorage.getItem('loggedIn');
    if(isLoggedIn === "false"){
      // alert("Cannot navigate")
      this.router.navigateByUrl('/unauthorized')
      return false;
    }

    return true;
  }
};
