import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoslovniPartnerService {

  constructor(private _http: HttpClient) { }

  sviPP_url = "http://localhost:8080/api/poslovni_partner/all";
  dodajPP_url = "http://localhost:8080/api/poslovni_partner/add";
  izbrisiPP_url = "http://localhost:8080/api/poslovni_partner/delete";

  sviPartneri(){
    return this._http.get(this.sviPP_url);
  }

  dodajPP(pp){
    return this._http.post(this.dodajPP_url, pp);
  }

  izbrisiPP(id){
    return this._http.get(this.izbrisiPP_url + id);
  }
}
