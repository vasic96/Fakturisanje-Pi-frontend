import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JedinicaMereService } from '../jedinica-mere.service';
import { error } from '@angular/compiler/src/util';
import * as $ from 'jquery';
@Component({
  selector: 'app-jedinica-mere',
  templateUrl: './jedinica-mere.component.html',
  styleUrls: ['./jedinica-mere.component.css']
})
export class JedinicaMereComponent implements OnInit {

  constructor(private jedinicaMereService: JedinicaMereService ) { }
  
  ngOnInit() {
    this.allJedinicaMere();
  
  }

  jm;
  allJedinicaMere(){


    this.jedinicaMereService.allJedinicaMere().subscribe(

      data => this.jm = data,
      error => alert("greska pri ucitavanju Robe")
    )

  }

  deleteJedinicaMere(jedinicaMere){

    if(confirm("jedinicaMere"+ jedinicaMere.naziv)){

      this.jedinicaMereService.deleteJedinicaMere(jedinicaMere.id).subscribe(
        success => this.allJedinicaMere(),
        error => alert("jedinica Mere ne mozete brisati")

      )

    }

  }
  
  onSubmitGrupaRobe(jedinicaMere){
    console.log(jedinicaMere)
  
    this.jedinicaMereService.addJedinicaMere(jedinicaMere).subscribe(
      success => {
        this.allJedinicaMere();
        $("#jmForma .close").click()

      },
      error => {
        alert("greska pri dodavanju grupe robe");
      }
    )


  }


}
