import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StopaPdvService {

  constructor(private _http: HttpClient) { }
  allStopaPdvUrl="http://localhost:8080/api/stopa_pdv/all";
  addStopaPdvUrl="http://localhost:8080/api/stopa_pdv/add";

  allStopaPdv(){


    return this._http.get(this.allStopaPdvUrl);

  }

  addStopaPdv(stopaPdv){

    return this._http.post(this.addStopaPdvUrl, stopaPdv);



  }
}
