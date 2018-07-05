import { Component, OnInit , ViewChild} from '@angular/core';
import { PoslovniPartnerService } from '../poslovni-partner.service';
import * as $ from 'jquery';
import { PreduzeceService } from '../preduzece.service';
import { MestoService } from '../mesto.service';

@Component({
  selector: 'app-poslovni-partner',
  templateUrl: './poslovni-partner.component.html',
  styleUrls: ['./poslovni-partner.component.css']
})
export class PoslovniPartnerComponent implements OnInit {

  constructor(private poslovniPartnerService: PoslovniPartnerService,
              private preduzeceService: PreduzeceService,
              private mestoService: MestoService) { }

  ngOnInit() {
    this.dajSvePP();
    this.uzmiPreduzeca();
    this.dajSvaMesta();
  }

  @ViewChild('poslovniPartnerModal') public modal;

  poslovniPartneri;
  preduzeca;
  mesta;

  dajSvaMesta(){
    this.mestoService.svaMesta().subscribe(
      data => this.mesta = data,
      error => alert("Ucitavanje mesta nije uspelo")
    )
  }

  dajSvePP(){
    this.poslovniPartnerService.sviPartneri().subscribe(
      success => this.poslovniPartneri = success,
      error => alert("Greska prilikom ucitavanja cenovnika")
    )
  }

  onSubmitPP(pp){
    console.log(pp)
    this.poslovniPartnerService.dodajPP(pp).subscribe(
      success => {
        this.dajSvePP();
        $("#poslovniPartnerModal .close").click()
      },
      error => {
        alert("Greska u dodavanju poslovnog partnera")
      }
    )
  }

  izbrisiPP(pp){
    if(confirm("Da li zelite da izbrisete " + pp.id + " ?")){
      this.poslovniPartnerService.izbrisiPP(pp.id).subscribe(
        success => this.dajSvePP(),
        error => alert("Nije moguce izbrisati poslovnog partnera!")
      )
    }
  }

  uzmiPreduzeca(){
    this.preduzeceService.svaPreduzeca().subscribe(
      success=> this.preduzeca = success,
      error => alert("Nemere ucitati preduzeca")
    )
  }

}
