import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaktureService {

  constructor(private _http: HttpClient) { }

  sveFaktureUrl = "http://localhost:8080/api/fakture/all/";
  dodajFakturuUrl = "http://localhost:8080/api/fakture/add";
  dodajStavkuUrl = "http://localhost:8080/api/stavka_fakture/add";
  stavkePoFakturiUrl = "http://localhost:8080/api/stavka_fakture/faktura/";

  sveFakture(){
    return this._http.get(this.sveFaktureUrl);
  }

  dodajFakturu(faktura){
    return this._http.post(this.dodajFakturuUrl,faktura);
  }

  fakturaPoId(id){
    return this._http.get(this.sveFaktureUrl + id);
  }

  dodajStavku(stavka) {
    return this._http.post(this.dodajStavkuUrl,stavka);
  }

  dajStavkePoFakturi(fakturaId){

    return this._http.get(this.stavkePoFakturiUrl + fakturaId);

  }

}