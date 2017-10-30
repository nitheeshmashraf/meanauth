import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  order:any;
  user:any;
	users:any;
  menus:any;
  menu:any;
	mine:boolean =false;
	ops:boolean = true;
	operations:any;
	boptions:boolean =false;
	boption:any;
  visAddNewDiv:boolean=true;
  visAddNewDivMenu:boolean=true;
  visbtnvalue:string;
  name  :string;
  username:string;
  email  :string;
  PhoneNo  :number;
  RegistrationNo  :string;
  RoomNo  :string;
  password:string;
  password1:string;

  RoomMenu={
    cuisine:'',
    FoodType:'',
    ItemName:'',
    ItemPrice:''
  }

  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'http://localhost:4200/login';

  constructor( private validateService: ValidateService, private authService: AuthService, private router: Router, private flashMessages: FlashMessagesService) {
     
   }

  ngOnInit() {
  	this.authService.getOrders().subscribe(data => {
  		console.log(data);
  		this.order= data;
  	}, err => { console.log(err); return false;});

  	this.authService.getOptions().subscribe(data => {
  		console.log(data);
  		this.operations= data;
  	}, err => { console.log(err); return false;});
    
    this.authService.getUsers().subscribe(data => {
      console.log(data);
      this.users= data;
    }, err => { console.log(err); return false;});

     this.authService.getMenus().subscribe(data => {
      console.log(data);
      this.menus= data;
    }, err => { console.log(err); return false;});
  }

  showops(){
  	this.mine=!this.mine;
  	this.ops=!this.ops;
  }

  showmine(){
  	this.ops=!this.ops;
  	this.mine=!this.mine;
  }

  intoitem(boption){
  	this.boption=boption;
  	this.boptions=true;
  	this.ops=false;
  	this.mine=false;
    if(this.boption=='Guests'){
      this.visbtnvalue="Create User";

    }else{
      this.visbtnvalue="Create Item";

    }
  }

  ClearMenuItem(){
      this.RoomMenu={
      cuisine:'',
      FoodType:'',
      ItemName:'',
      ItemPrice:''
    }
  }

  outtofront(boption){
  	this.boption='';
  	this.boptions=false;
  	this.ops=true;
  	this.mine=false;
    this.visAddNewDiv=true;

  }

  AddMenuItem(){
    this.authService.AddMenuItem(this.RoomMenu).subscribe(data => {
      console.log(data);
      this.menu= data;
    }, err => { console.log(err); return false;});

  }

  visAddNewDivfn(boption){
    if(this.boption=='Guests'){
        this.visAddNewDiv=!this.visAddNewDiv;
        if(!this.visAddNewDiv)
        this.visbtnvalue="Show Users";
      else
        this.visbtnvalue="Create Users";
    }else{
        this.visAddNewDiv=!this.visAddNewDiv;
        if(!this.visAddNewDiv)
        this.visbtnvalue="Show Item";
      else
        this.visbtnvalue="Create Item";
    }

  }

  visAddNewDivfnMenu(){
    this.visAddNewDivMenu=!this.visAddNewDivMenu;
    if(!this.visAddNewDivMenu)
    this.visbtnvalue="Show Menu";
  else
    this.visbtnvalue="Create Item";

  }

  onRegisterSubmit(){
    console.log(this.name,this.username,this.password,this.email);
    if(this.password == this.password1){
      const user = {
        name  :this.name,
        username:this.username,
        password:this.password,
        email  :this.email,
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
