import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistracijaService {

  constructor(private _http: HttpClient) { }

  registracijaUrl = "http://localhost:8080/sign-up";
  loginUrl = "http://localhost:8080/login";
  urlLogout = "http://localhost:8080/logout";
  izmenaSifreUrl = "http://localhost:8080/api/change-password"
  izmenaPodatakaUrl = "http://localhost:8080/api/change-info"


  registracija(preduzece){
    return this._http.post(this.registracijaUrl,preduzece);
  }

  login(loginData){
    let contentHeader = new HttpHeaders();
    return this._http.post(this.loginUrl,loginData,{ headers: contentHeader, observe: 'response' });
  }
  
  logOut(){
    return this._http.get(this.urlLogout);
  }

  
  izmenaSifre(passwords){
    return this._http.put(this.izmenaSifreUrl,passwords);
  }

  izmenaPodataka(preduzece){
    return this._http.put(this.izmenaPodatakaUrl,preduzece);
  }
  
  myInfo(){
    return this._http.get("http://localhost:8080/api/my-info");
  }

}
