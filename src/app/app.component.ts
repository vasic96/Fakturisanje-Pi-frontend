import { Component, OnInit } from '@angular/core';
import { RegistracijaService } from './registracija.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  logedIn = false;

  ngOnInit(){
    this.loginProvera();
  }

  constructor(private registracijaService: RegistracijaService,private router: Router) {}

  onSubmitLogin(loginData){
    console.log(loginData);

    this.registracijaService.login(loginData).subscribe(
      data => {
        let token = data.headers.get("Authorization");
        console.log(data.headers.get("Authorization"));
        localStorage.setItem('trenutnoPreduzece', JSON.stringify({ token: token, user: loginData.email }));
        this.loginProvera();
        $("#loginModal .close").click()
      }
    )

  }

  odjava(){
   this.registracijaService.logOut().subscribe(data => console.log("Logout success"));
   localStorage.clear();
   this.loginProvera();
   this.router.navigate['/preduzeca'];

  }

  loginProvera() {

    var currentUser = JSON.parse(localStorage.getItem('trenutnoPreduzece'));
    if (currentUser == undefined) {
      this.logedIn = false;
      console.log("Nije ulogovan");

    } else if (currentUser) {
      this.logedIn = true;
      console.log(currentUser);

    }
  }

}
