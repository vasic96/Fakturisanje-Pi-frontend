import { Component, OnInit, ViewChild } from '@angular/core';
import { CenovnikService } from '../cenovnik.service';
import * as $ from 'jquery';
import { Cenovnik } from '../model/Cenovnik';

@Component({
  selector: 'app-cenovnik',
  templateUrl: './cenovnik.component.html',
  styleUrls: ['./cenovnik.component.css']
})

export class CenovnikComponent implements OnInit {

  constructor(private cenovnikService: CenovnikService) { }

  ngOnInit() {
    this.dajSveCenovnike();
  }
  @ViewChild('cenovnikModal') public modal;

  cenovnici = []

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

  izbrisiCenovnik(cenovnik: Cenovnik){
    if(confirm("Da li zelite da izbrisete " + cenovnik.preduzeceIme + " ?")){
      this.cenovnikService.izbrisiCenovnik(cenovnik.id).subscribe(
        success => this.dajSveCenovnike(),
        error => alert("Nije moguce izbrisati cenovnik!")
      )
    }
  }
}
