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
  constructor( private authService: AuthService, private router: Router) { 

  }

  ngOnInit() {
  	this.authService.getOrders().subscribe(data => {
  		console.log(data);
  		this.order= data;
  	}, err => { console.log(err); return false;});
  }

}
