import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {LoginService} from '../../../../service/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: LoginService,
              public router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    if (this.auth.user.userRole.name !== expectedRole) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
