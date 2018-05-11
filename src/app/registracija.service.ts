import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistracijaService {

  constructor(private _http: HttpClient) { }

  registracijaUrl = "http://localhost:8080/api/preduzece/dodaj";

  registracija(preduzece){
    return this._http.post(this.registracijaUrl,preduzece);
  }

}
