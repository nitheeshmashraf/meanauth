import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: string;
	password: string;

  constructor( private authService: AuthService, private router: Router, private flashMessages: FlashMessagesService) { }

  onLoginSubmit(){
  	console.log(this.username);
  	const user={
  		username: this.username,
  		password: this.password
  	}
  	this.authService.authenticateUser(user).subscribe( data=> {
  		if(data.success){
  			this.authService.storeUserData(data.token, data.user);
  			// alert("Login Successfull");
  			this.router.navigate(['/dashboard']);

  		}else{
        this.flashMessages.show(data.msg, { cssClass: 'alert-success' , timeout: 3000 });
  			// alert(data.msg);
  			this.router.navigate(['/login']);
  		}
  	});
  }

 

  ngOnInit() {
  }

}
