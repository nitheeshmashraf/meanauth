import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
	
	constructor(private authServices:AuthService, private router: Router) {
 	}

 	canActivate(){
 		if(this.authServices.loggedIn()){
 			return true;
 		}else{
 			this.router.navigate(['/login']);
 		}
 	}
}