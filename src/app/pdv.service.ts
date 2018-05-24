import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  constructor(private _http: HttpClient) { }
  allPdvUrl= "http://localhost:8080/api/pdv/all";
  deletePdvUrl= "http://localhost:8080/api/pdv/delete/"



  allPdv(){

  return this._http.get(this.allPdvUrl);

  }

  deletePdv(id){

    return this._http.delete(this.deletePdvUrl+id);
  }

}
