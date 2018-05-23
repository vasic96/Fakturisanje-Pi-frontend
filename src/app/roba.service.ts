import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RobaService {

  constructor(private _http: HttpClient) { }
  allRobaUrl= "http://localhost:8080/api/roba/all";
  izbrisiRobuUrl= "http://localhost:8080/api/roba/delete/"
  addRobaUrl = "http://localhost:8080/api/roba/add/"
  allRoba(){

    return this._http.get(this.allRobaUrl);

  }

  addRoba(roba){

    return this._http.post(this.addRobaUrl, roba);

  }

  izbrisiRobu(id){
    return this._http.delete(this.izbrisiRobuUrl+id);

  }
}
