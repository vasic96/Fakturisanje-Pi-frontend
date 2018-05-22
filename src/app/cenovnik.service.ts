import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenovnikService {

  constructor(private _http: HttpClient) { }
  sviCenovniciUrl = "http://localhost:8080/api/cenovnik/all";
  dodajCenovnikUrl = "http://localhost:8080/api/cenovnik/add";
  izbrisiCenovnikUrl = "http://localhost:8080/api/cenovnik/delete/";
  sviCenovnici(){
    return this._http.get(this.sviCenovniciUrl);
  }

  dodajCenovnik(cenovnik){
    return this._http.post(this.dodajCenovnikUrl,cenovnik);
  }

  izbrisiCenovnik(id){
    return this._http.delete(this.izbrisiCenovnikUrl + id);
  }
}
