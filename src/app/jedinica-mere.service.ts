import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JedinicaMereService {

  constructor(private _http: HttpClient) { }

  allJedinicaMereUrl="http://localhost:8080/api/jedinicaMere/all";
  allJedinicaMere(){


    return this._http.get(this.allJedinicaMereUrl);
  }



}
