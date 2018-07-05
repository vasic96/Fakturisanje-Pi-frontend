import { Component, OnInit, ViewChild } from '@angular/core';
import { CenovnikService } from '../cenovnik.service';
import * as $ from 'jquery';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-cenovnik',
  templateUrl: './cenovnik.component.html',
  styleUrls: ['./cenovnik.component.css']
})

export class CenovnikComponent implements OnInit {

  constructor(private cenovnikService: CenovnikService, private preduzeceService: PreduzeceService) { }

  ngOnInit() {
    this.dajSveCenovnike();
    this.uzmiPreduzeca();
  }

  @ViewChild('cenovnikModal') public modal;

  cenovnici;
  preduzeca;

  uzmiPreduzeca(){
    this.preduzeceService.svaPreduzeca().subscribe(
      success=> this.preduzeca = success,
      error => alert("Nemere ucitati preduzeca")
    )
  }

  dajSveCenovnike(){
    this.cenovnikService.sviCenovnici().subscribe(
      success=> this.cenovnici = success,
      error => alert("Greska prilikom ucitavanja cenovnika")
    )
  }

  onSubmitCenovnik(cenovnik){
    console.log(cenovnik)
    this.cenovnikService.dodajCenovnik(cenovnik).subscribe(
      success => {
        this.dajSveCenovnike();
        $("#cenovnikModal .close").click()
      },
      error => {
        alert("Greska u dodavanju cenovnika")
      }
    )
  }

  izbrisiCenovnik(cenovnik){
    if(confirm("Da li zelite da izbrisete " + cenovnik.preduzeceIme + " ?")){
      this.cenovnikService.izbrisiCenovnik(cenovnik.id).subscribe(
        success => this.dajSveCenovnike(),
        error => alert("Nije moguce izbrisati cenovnik!")
      )
    }
  }
}
