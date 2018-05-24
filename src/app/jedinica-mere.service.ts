import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JedinicaMereService {

  constructor(private _http: HttpClient) { }

  allJedinicaMereUrl="http://localhost:8080/api/jedinicaMere/all";
  deleteJedincaMereUrl= "http://localhost:8080/api/jednicaMere/delete/";
  addJedinicaMereUrl= "http://localhost:8080/api/jedinicaMere/add/"
  
  
  allJedinicaMere(){


    return this._http.get(this.allJedinicaMereUrl);
  }

  deleteJedinicaMere(id){
    
    return this._http.delete(this.deleteJedincaMereUrl+id);

  }

  addJedinicaMere(jedinicaMere)
  {

    return this._http.post(this.addJedinicaMereUrl, jedinicaMere)
  }


}
