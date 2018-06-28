import { Component, OnInit } from '@angular/core';
import { FaktureService } from '../fakture.service';
import { PreduzeceService } from '../preduzece.service';
import { PoslovnaGodinaService } from '../poslovna-godina.service';
import { PoslovniPartnerService } from '../poslovni-partner.service';
import * as $ from 'jquery';
import { LoginProveraService } from '../login-provera.service';
import { FakturaPage } from './Faktura';


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
    this.direction = 'ASC';
    this.order = 'iznosZaPlacanje';
    this.currentPage = 1;
    this.numPerPage = 6;
    this.dajSveFakture(this.currentPage);
    this.dajSveGodine();
    this.dajSvePartnere();
    
   }
  }
  private pageInfo : FakturaPage;
  fakture;
  godine;
  partneri;
  ulogovan;
  direction;
  currentPage:number;
  order;
  numPerPage:number;

  dajSveFakture(page){
    console.log("Daj sve fakture called");
    this.faktureService.sveFakture(page,this.order,this.direction,this.numPerPage).subscribe(
      data => {
        this.fakture = data.content;
        this.pageInfo = data;
        console.log(data);
      },
      error => alert("Greska prilikom ucitavanja faktura")
    )
  }

  radioButtonClick(direction){
    console.log(direction);
    this.direction=direction;
    this.dajSveFakture(this.currentPage);
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
        this.dajSveFakture(1);
        $("#mestoModal .close").click();
      },
      error=> alert(error)
    )
  }

  izbrisiFakturu(id){
    if(confirm("Da li zelite da izbrisete fakturu?")){
      this.faktureService.izbrisiFakturu(id).subscribe(
        success => this.dajSveFakture(1),
        error => alert("Greska prilikom brisanja fakture")
      )
    }
  }

  selectOrder(value){
    console.log(value);
    this.order = value;
    this.dajSveFakture(this.currentPage);
  }

  changePage(pageNum:number){
    this.currentPage+=pageNum;
    this.dajSveFakture(this.currentPage);
  }

  selectNumOfPages(num:number){
    this.numPerPage=num;
    this.dajSveFakture(this.currentPage);
  }


}
