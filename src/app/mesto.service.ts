import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MestoService {

  constructor(private _http: HttpClient) { }
  svaMestaUrl = "http://localhost:8080/open/mesto/all";
  dodajMestoUrl = "http://localhost:8080/open/mesto/add";
  izbrisiMestoUrl = "http://localhost:8080/api/mesto/izbrisi/";
  svaMesta(){
    return this._http.get(this.svaMestaUrl);
  }

  dodajMesto(mesto){
    return this._http.post(this.dodajMestoUrl,mesto);
  }

  izbrisiMesto(id){
    return this._http.delete(this.izbrisiMestoUrl + id);
  }

}
