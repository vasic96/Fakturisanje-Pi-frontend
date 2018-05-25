import { Component, OnInit } from '@angular/core';
import { FaktureService } from '../fakture.service';
import { PreduzeceService } from '../preduzece.service';
import { PoslovnaGodinaService } from '../poslovna-godina.service';
import { PoslovniPartnerService } from '../poslovni-partner.service';
import * as $ from 'jquery';
import { LoginProveraService } from '../login-provera.service';


@Component({
  selector: 'app-fakture-list',
  templateUrl: './fakture-list.component.html',
  styleUrls: ['./fakture-list.component.css']
})
export class FaktureListComponent implements OnInit {

  constructor(private faktureService: FaktureService,
              private preduzeceService: PreduzeceService,
              private pGodinaService: PoslovnaGodinaService,
              private pPartnerService: PoslovniPartnerService,
              private loginProveraService: LoginProveraService) { }

  ngOnInit() {
    this.ulogovan = this.loginProveraService.loginProvera();
   if(this.ulogovan){
    this.dajSveFakture();
    this.dajSveGodine();
    this.dajSvePartnere();
   }
  }

  fakture;
  godine;
  partneri;
  ulogovan;

  dajSveFakture(){
    this.faktureService.sveFakture().subscribe(
      data => this.fakture = data,
      error => alert("Greska prilikom ucitavanja faktura")
    )
  }


  dajSvePartnere(){
    this.pPartnerService.sviPartneri().subscribe(
      data => this.partneri = data
    )
  }

  dajSveGodine(){
    this.pGodinaService.svePoslovneGodine().subscribe(
      data => this.godine = data
    )
  }

  onSubmitFaktura(faktura){
    console.log(faktura);
    this.faktureService.dodajFakturu(faktura).subscribe(
      success => {
        this.dajSveFakture();
        $("#mestoModal .close").click();
      },
      error=> alert(error)
    )
  }

  izbrisiFakturu(id){
    if(confirm("Da li zelite da izbrisete fakturu?")){
      this.faktureService.izbrisiFakturu(id).subscribe(
        success => this.dajSveFakture(),
        error => alert("Greska prilikom brisanja fakture")
      )
    }
  }

}
