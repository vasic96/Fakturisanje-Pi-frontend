import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginProveraService {

  constructor() { }


  loginProvera() {
    var currentUser = JSON.parse(localStorage.getItem('trenutnoPreduzece'));
    if (currentUser == undefined) {
      
      return false;

    } else if (currentUser) {
      
      return true;

    }
  }
}
