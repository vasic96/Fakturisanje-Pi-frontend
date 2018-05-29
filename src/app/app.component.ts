import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { RegistracijaService } from './registracija.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LoginProveraService } from './login-provera.service';
import { MestoService } from './mesto.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  logedIn;
  mesta;
  email;
  preduzece;
  showEditModal=false;

  ngOnInit() {
    this.logedIn = this.loginProveraService.loginProvera();
    if(this.logedIn){
      this.email  = this.loginProveraService.getLogedInUserEmail();
      this.getMyInfo();
    }
    this.mestoService.svaMesta().subscribe(
      success => this.mesta = success
    )
  }

  constructor(private registracijaService: RegistracijaService, private router: Router,
    private el: ElementRef, private renderer: Renderer,
    private loginProveraService: LoginProveraService,
    private mestoService: MestoService) { }

  onSubmitLogin(loginData) {
    console.log(loginData);

    this.registracijaService.login(loginData).subscribe(
      data => {
        let token = data.headers.get("Authorization");
        console.log(data.headers.get("Authorization"));
        localStorage.setItem('trenutnoPreduzece', JSON.stringify({ token: token, user: loginData.email }));
        this.logedIn = true;
        $("#loginModal .close").click()
      },
      error => alert("Pogresan email ili lozinka!")
    )

  }

  odjava() {
    this.registracijaService.logOut().subscribe(data => {
      localStorage.clear();
      alert("logout successful")
      this.logedIn = false;
      this.router.navigate['/preduzeca'];
    });


  }

  getMyInfo(){
    this.registracijaService.myInfo().subscribe(
      success => {
        this.preduzece = success
        this.showEditModal=true;
        console.log(this.preduzece);
      }
    )
  }



  onSubmitEditPassword(passwords,form: NgForm) {
    if (confirm("Da li ste sigurni da zelite da promenite lozinku?")) {
      this.registracijaService.izmenaSifre(passwords).subscribe(
        success => {
          alert("Lozinka uspesno promenjena!");
          this.odjava();
        },
        error=> alert("Morate uneti ispravnu trenutnu lozinku!")
      )
    }

  }

  clearForm(form: NgForm){
    form.resetForm();
  }

  onSubmitEditInfo(editInfoForm) {
    console.log(editInfoForm);
    if(confirm("Da li ste sigurni da zelite da izmenite podatke o preduzecu?")){
      this.registracijaService.izmenaPodataka(editInfoForm).subscribe(
        success=> {
          alert("Podaci uspesno izmenjeni!");
          this.odjava();
        }, error=> {
          if(error.status === 401){
            alert("Morate uneti ispravnu lozinku")
          } 
          if(error.status===404){
            alert("Email adresa vec postoji")
          } else{
            console.log(error);
          }
        }
      )
    }
  }
  editInfoModalOepn() {
    $("#openEditInfoModal").click();
  }
  openEditPwdModal() {
    $("#openEditPasswordModal").click();
  }

  onMenuClick() {
    //this.el.nativeElement.querySelector('.navbar-ex1-collapse')  get the DOM
    //this.renderer.setElementClass('DOM-Element', 'css-class-you-want-to-add', false) if 3rd value is true 
    //it will add the css class. 'in' class is responsible for showing the menu, remove it.
    this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-ex1-collapse'), 'in', false);
  }
}
