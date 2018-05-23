import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StavkeCenovnikaService {

  constructor(private _http: HttpClient) { }

  private sveStavkeUrl = "http://localhost:8080/api/stavka_cenovnika/all"

  sveStavkeCenovnika(){
    return this._http.get(this.sveStavkeUrl);
  }

}
