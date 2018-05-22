import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaktureService {

  constructor(private _http: HttpClient) { }

  sveFaktureUrl = "http://localhost:8080/api/fakture/all";
  dodajFakturuUrl = "http://localhost:8080/api/fakture/add";

  sveFakture(){
    return this._http.get(this.sveFaktureUrl);
  }

  dodajFakturu(faktura){
    return this._http.post(this.dodajFakturuUrl,faktura);
  }

}
