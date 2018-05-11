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
  svaMesta(){
    return this._http.get<Mesto[]>(this.svaMestaUrl);
  }

}
