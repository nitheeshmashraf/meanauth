import { Component, OnInit } from '@angular/core';

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

  constructor() {
  	 
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
  	}
  	
  }

}
