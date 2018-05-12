import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Mesto } from './model/Mesto';

@Injectable({
  providedIn: 'root'
})
export class MestoService {

  constructor(private _http: HttpClient) { }
  svaMestaUrl = "http://localhost:8080/api/mesto/all";
  dodajMestoUrl = "http://localhost:8080/api/mesto/add";
  izbrisiMestoUrl = "http://localhost:8080/api/mesto/izbrisi/";
  svaMesta(){
    return this._http.get<Mesto[]>(this.svaMestaUrl);
  }

  dodajMesto(mesto){
    return this._http.post(this.dodajMestoUrl,mesto);
  }

  izbrisiMesto(id){
    return this._http.delete(this.izbrisiMestoUrl + id);
  }

}
