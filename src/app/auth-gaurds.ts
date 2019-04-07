import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from '../../node_modules/rxjs';
import { Injectable } from '@angular/core';
import { ComplaintService } from './complaint.service';

@Injectable()

export class AuthGaurd implements CanActivate {

    constructor(private compserv: ComplaintService,
                    private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | Observable<boolean> | Promise<boolean>{

            let isLoggedIn: boolean;

       isLoggedIn =this.compserv.isAuth();
       if(isLoggedIn) {
           return true;

       } else {
           console.log('pavan')
        this.router.navigate(['/login']);
        return false;
       }
    }
}