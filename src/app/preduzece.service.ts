import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreduzeceService {

  constructor(private _http: HttpClient) { }
  svaPreduzecaUrl = "http://localhost:8080/open/preduzece/all";

  svaPreduzeca(){
    return this._http.get(this.svaPreduzecaUrl);
  }
}
