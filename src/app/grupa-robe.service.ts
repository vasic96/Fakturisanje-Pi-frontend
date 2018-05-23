import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GrupaRobeService {



  constructor(private _http: HttpClient) { }
  allGrupaRobeUrl="http://localhost:8080/api/grupa_robe/all";
  dodajGrupuRobeUrl="http://localhost:8080/api/grupa_robe/add"
  izbrisiGrupuRobeUrl="http://localhost:8080/api/grupa_robe/delete/"


  allGrupaRobe(){

    return this._http.get(this.allGrupaRobeUrl);
  }

  izbrisiGrupuRobe(id){
    return this._http.delete(this.izbrisiGrupuRobeUrl+id);

  }

  addGrupaRobe(grupa_robe){

    return this._http.post(this.dodajGrupuRobeUrl, grupa_robe);
  }
}
