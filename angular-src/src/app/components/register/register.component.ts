import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	name	:string;
	username:string;
	email	:string;
	password:string;
	password1:string;

  constructor( private validateService: ValidateService) {
  	 
   }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	console.log(this.name,this.username,this.password,this.email);
  	if(this.password == this.password1){
  		const user = {
	  		name	:this.name,
	  		username:this.username,
	  		password:this.password,
	  		email	:this.email
  		}


        // required fields
        if(!this.validateService.validateRegister(user)){
          console.log("please fill in all the fields");
          return false;
        }

        // required email
        if(!this.validateService.ValidateEmail(user.email)){
          console.log("please use valid email");
          return false;
        }
  	}

  
  	
  }




}