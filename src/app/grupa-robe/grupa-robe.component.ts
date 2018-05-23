import { Component, OnInit, ViewChild } from '@angular/core';
import {GrupaRobeService} from '../grupa-robe.service';
import {PdvService} from '../pdv.service';
import { error } from 'util';
import * as $ from 'jquery';





@Component({
  selector: 'app-grupa-robe',
  templateUrl: './grupa-robe.component.html',
  styleUrls: ['./grupa-robe.component.css']
})
export class GrupaRobeComponent implements OnInit {

  constructor(  private pdvService: PdvService ,private grupaRobeService: GrupaRobeService) { }

  ngOnInit() {
    this.allGrupaRobe();
    this.allPdv();
    
  }

  gr;

  pdve;


  allGrupaRobe(){
    this.grupaRobeService.allGrupaRobe().subscribe(
      data => this.gr = data,
      error => alert("greska pri ucitavanju grupa robe")


    )

  }

  
  allPdv(){

    
    this.pdvService.allPdv().subscribe(
      data1=> this.pdve= data1,
      error => alert("greska pri ucitavnju")

    )

  }

  izbrisiGrupuRobe(grupaRobe){

    if(confirm("grupu robe "+ grupaRobe.naziv)){
        this.grupaRobeService.izbrisiGrupuRobe(grupaRobe.id).subscribe(
        success => this.allGrupaRobe(),
        error => alert("ne moze se izbrisati grupa robe")
      )
    }


  }

  onSubmitGrupaRobe(grupaRobe,  gru= grupaRobe.preduzeceID = "1"){
    console.log(grupaRobe)
  
    this.grupaRobeService.addGrupaRobe(grupaRobe).subscribe(
      success => {
        this.allGrupaRobe();
        $("#GrupaRobeForma .close").click()

      },
      error => {
        alert("greska pri dodavanju grupe robe");
      }
    )


  }

}
