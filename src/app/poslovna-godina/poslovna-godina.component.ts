import { Component, OnInit, ViewChild } from '@angular/core';
import { CenovnikService } from '../cenovnik.service';
import * as $ from 'jquery';
import { Poslovna_Godina } from '../model/Poslovna_Godina';
import { PoslovnaGodinaService } from '../poslovna-godina.service';

@Component({
  selector: 'app-poslovna-godina',
  templateUrl: './poslovna-godina.component.html',
  styleUrls: ['./poslovna-godina.component.css']
})
export class PoslovnaGodinaComponent implements OnInit {

  constructor(private poslovnaGodinaService: PoslovnaGodinaService) { }

  ngOnInit() {
    this.dajSvePoslovneGodine();
  }
  @ViewChild('poslovnaGodinaModal') public modal;

  poslovneGodine = []

  dajSvePoslovneGodine(){
    this.poslovnaGodinaService.svePoslovneGodine().subscribe(
      success=> this.poslovneGodine = success,
      error => alert("Greska prilikom ucitavanja poslovneGodine")
    )
  }

  onSubmitPoslovnaGodina(poslovnaGodina){
    console.log(poslovnaGodina)
    this.poslovnaGodinaService.dodajPoslovnuGodinu(poslovnaGodina).subscribe(
      success => {
        this.dajSvePoslovneGodine();
        $("#poslovneGodineModal .close").click()
      },
      error => {
        alert("Greska u dodavanju poslovneGodine")
      }
    )
  }

  izbrisiPoslovnuGodinu(poslovnaGodina: Poslovna_Godina){
    if(confirm("Da li zelite da izbrisete " + poslovnaGodina.godina + " ?")){
      this.poslovnaGodinaService.izbrisiPoslovnuGodinu(poslovnaGodina.id).subscribe(
        success => this.dajSvePoslovneGodine(),
        error => alert("Nije moguce izbrisati cenovnik!")
      )
    }
  }

}
