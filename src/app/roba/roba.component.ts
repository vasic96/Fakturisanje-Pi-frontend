import { Component, OnInit } from '@angular/core';
import { RobaService } from '../roba.service';
import { error } from '@angular/compiler/src/util';
import { GrupaRobeService } from '../grupa-robe.service';
import * as $ from 'jquery';
import { JedinicaMereService } from '../jedinica-mere.service';



@Component({
  selector: 'app-roba',
  templateUrl: './roba.component.html',
  styleUrls: ['./roba.component.css']
})
export class RobaComponent implements OnInit {

  constructor(private robaService: RobaService, private grupaRobeService : GrupaRobeService,
              private jedinicaMere: JedinicaMereService) { }

  ngOnInit() {

    this.allRoba();
    this.allGrupaRobe();
    this.allJedinicaMere();
  }

  r;
  gr;
  jm;

  allJedinicaMere(){

    this.jedinicaMere.allJedinicaMere().subscribe(

      data => this.jm = data,
      error => alert("greska pri ucitavanju Robe")
    )
  }

  allRoba(){

    this.robaService.allRoba().subscribe(

      data => this.r = data,
      error => alert("greska pri ucitavanju Robe")
    )
  }

  allGrupaRobe(){
    this.grupaRobeService.allGrupaRobe().subscribe(
      data => this.gr = data,
      error => alert("greska pri ucitavanju grupa robe")


    )

  }

  
  onSubmitGrupaRobe(roba){
    console.log(roba)
  
    this.robaService.addRoba(roba).subscribe(
      success => {
        this.allRoba();
        $("#RobaForma .close").click()

      },
      error => {
        alert("greska pri dodavanju grupe robe");
      }
    )


  }

  izbrisiRobu(roba){
    if(confirm("roba" + roba.naziv)){

      this.robaService.izbrisiRobu(roba.id).subscribe(
        success => this.allRoba(),
        error => alert("robu ne mozete izbrisati")

      )


    }


  }

}
