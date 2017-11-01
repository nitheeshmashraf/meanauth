import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken:any;
	user: any;
  MenuItem:any;
  // token =localStorage.getItem('id_token');
  

  constructor( private http:Http) {  }

  registerUser(user){
  		let headers = new Headers;
  		headers.append('Content-Type','application/json');
      // return this.http.post('users/register',user,{headers: headers})
  		return this.http.post('users/register',user,{headers: headers})
  		.map(res => res.json());
  	}

    AddMenuItem(MenuItem){
      let headers = new Headers;
      headers.append('Content-Type','application/json');
      // return this.http.post('users/register',user,{headers: headers})
      return this.http.post('users/addmenuitem',MenuItem,{headers: headers})
      .map(res => res.json());
    }

    addspadeal(SpaDeal){
      console.log(SpaDeal);
      let headers = new Headers;
      headers.append('Content-Type','application/json');
      // return this.http.post('users/register',user,{headers: headers})
      return this.http.post('users/addspadeal',SpaDeal,{headers: headers})
      .map(res => res.json());
    }

  authenticateUser(user){
  		let headers = new Headers;
  		headers.append('Content-Type','application/json');
  		return this.http.post('users/authenticate',user,{headers: headers})
  		.map(res => res.json());
	}

  addOrderedItem(OrderPlaced){
    let headers = new Headers;
      headers.append('Content-Type','application/json');
      // return this.http.post('users/register',user,{headers: headers})
      return this.http.post('users/addordereditem',OrderPlaced,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('users/profile',{headers: headers})
      .map(res => res.json());
  }

  getUserById(){
  let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('users/getUserById',{headers: headers})
      .map(res => res.json());
  }

  getOrders(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('users/getorders',{headers: headers})
      .map(res => res.json());
  }

  getPlacedOrders(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('users/getPlacedOrders',{headers: headers})
      .map(res => res.json());
  }

  getUsers(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('users/getusers',{headers: headers})
      .map(res => res.json());
  }

  getOptions(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('users/getoptions',{headers: headers})
      .map(res => res.json());
  }

  getMenus(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('users/getmenus',{headers: headers})
      .map(res => res.json());
  }

getSpaDeals(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('users/getspadeals',{headers: headers})
      .map(res => res.json());
  }
  storeUserData(token,user){
  		localStorage.setItem('id_token',token);
  		localStorage.setItem('user', JSON.stringify(user));
  		this.authToken = token;
  		this.user = user;
	}

  loadToken(){
    const token =localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    // console.log(tokenNotExpired('id_token'));
   return tokenNotExpired('id_token');
   
  //   if(localStorage.getItem('id_token'))
  //   return true;
  // else
  //   return false;
  }

	logout(){
		this.authToken = null;
		this.user = null;
		localStorage.clear();
	}

}
