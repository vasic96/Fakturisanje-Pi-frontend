import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoslovnaGodinaService {

  constructor(private _http: HttpClient) { }
  svePoslovneGodineUrl = "http://localhost:8080/api/pgodina/all";
  dodajPoslovnuGodinuUrl = "http://localhost:8080/api/pgodina/add";
  izbrisiPoslovnuGodinuUrl = "http://localhost:8080/api/pgodina/remove/";
  svePoslovneGodine(){
    return this._http.get(this.svePoslovneGodineUrl);
  }

  dodajPoslovnuGodinu(poslovnaGodina){
    return this._http.post(this.dodajPoslovnuGodinuUrl,poslovnaGodina);
  }

  izbrisiPoslovnuGodinu(id){
    return this._http.delete(this.izbrisiPoslovnuGodinuUrl + id);
  }
}
