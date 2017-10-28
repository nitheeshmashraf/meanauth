import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	order:any;
	mine:boolean =false;
	ops:boolean = true;
	operations:any;
	boptions:boolean =false;
	boption:any;
  constructor( private authService: AuthService, private router: Router) { 

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
  }

  outtofront(boption){
  	this.boption=boption;
  	this.boptions=false;
  	this.ops=true;
  	this.mine=false;
  }
}
