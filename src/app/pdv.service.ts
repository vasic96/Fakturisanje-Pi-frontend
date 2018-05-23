import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  constructor(private _http: HttpClient) { }
  allPdvUrl= "http://localhost:8080/api/pdv/all";



  allPdv(){

  return this._http.get(this.allPdvUrl);

  }

}
