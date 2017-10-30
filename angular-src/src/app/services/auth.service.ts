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
  		return this.http.post('http://localhost:3000/users/register',user,{headers: headers})
  		.map(res => res.json());
  	}

    AddMenuItem(MenuItem){
      let headers = new Headers;
      headers.append('Content-Type','application/json');
      // return this.http.post('users/register',user,{headers: headers})
      return this.http.post('http://localhost:3000/users/addmenuitem',MenuItem,{headers: headers})
      .map(res => res.json());
    }

  authenticateUser(user){
  		let headers = new Headers;
  		headers.append('Content-Type','application/json');
  		return this.http.post('http://localhost:3000/users/authenticate',user,{headers: headers})
  		.map(res => res.json());
	}

  getProfile(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('http://localhost:3000/users/profile',{headers: headers})
      .map(res => res.json());
  }

  getOrders(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('http://localhost:3000/users/getorders',{headers: headers})
      .map(res => res.json());
  }

  getUsers(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('http://localhost:3000/users/getusers',{headers: headers})
      .map(res => res.json());
  }

  getOptions(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('http://localhost:3000/users/getoptions',{headers: headers})
      .map(res => res.json());
  }

  getMenus(){
      let headers = new Headers;
      this.loadToken();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',this.authToken);
      return this.http.get('http://localhost:3000/users/getmenus',{headers: headers})
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
