import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	name	:string;
	username:string;
  email  :string;
  PhoneNo  :number;
  RegistrationNo  :string;
	RoomNo	:string;
	password:string;
	password1:string;

  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'http://localhost:4200/login';

  constructor( private validateService: ValidateService, private authService: AuthService, private router: Router, private flashMessages: FlashMessagesService) {
  	 
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
	  		email	:this.email,
        PhoneNo  :this.PhoneNo,
        RegistrationNo  :this.RegistrationNo,
        RoomNo  :this.RoomNo
  		}


        // required fields
        if(!this.validateService.validateRegister(user)){
          // console.log("please fill in all the fields");
          this.flashMessages.show("please fill in all the fields", { cssClass: 'alert-danger' , timeout: 3000 });
          return false;
        }

        // required email
        if(!this.validateService.ValidateEmail(user.email)){
          // console.log("please use valid email");
          this.flashMessages.show("please use valid email", { cssClass: 'alert-danger' , timeout: 3000 }); 
          return false;
        }

        // register user
        this.authService.registerUser(user).subscribe(data =>{
              if(data.success){
                // alert("Registration successfull");
                this.flashMessages.show("Registration successfull", { cssClass: 'alert-success' , timeout: 3000 }); 
                this.router.navigate(['/login']);
              }else{
                // alert("Registration unsuccessfull");
                this.flashMessages.show("Registration unsuccessfull", { cssClass: 'alert-danger' , timeout: 3000 }); 
                this.router.navigate(['/register']);

              }
            }
          );


  	}else{
      this.flashMessages.show("Passwords are different!!", { cssClass: 'alert-danger' , timeout: 3000 }); 
    }

  
  	
  }




}
