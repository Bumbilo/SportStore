import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Injectable()
export class AuthGuard {
  constructor(private _router: Router, private _auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this._auth.authenticated) {
      this._router.navigateByUrl('/dmin/auth');
    }
    return true;
  }
}
