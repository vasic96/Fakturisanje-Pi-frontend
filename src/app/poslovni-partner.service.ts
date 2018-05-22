import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoslovniPartnerService {

  constructor(private _http: HttpClient) { }

  poslovniPartneriUrl = "http://localhost:8080/api/poslovni_partner/all";

  sviPartneri(){
    return this._http.get(this.poslovniPartneriUrl);
  }



}
