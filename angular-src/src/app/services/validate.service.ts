import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { 
  	validateRegister(user){
  		if(user.name == undefined || user.username == undefined ||  user.password == undefined ||  user.email == undefined || ){
  			return false;
  		}
  	}
  }

}
