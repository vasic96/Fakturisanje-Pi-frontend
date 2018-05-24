import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  constructor(private _http: HttpClient) { }
  allPdvUrl= "http://localhost:8080/api/pdv/all";
  deletePdvUrl= "http://localhost:8080/api/pdv/delete/";
  addPdvUrl="http://localhost:8080/api/pdv/add/";

  allPdv(){

  return this._http.get(this.allPdvUrl);

  }

  addPdv(pdv){
    return this._http.post(this.addPdvUrl, pdv);

  }

  deletePdv(id){

    return this._http.delete(this.deletePdvUrl+id);
  }

}
