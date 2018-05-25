import { Component, OnInit, ViewChild } from '@angular/core';
import { MestoService } from '../mesto.service';
import * as $ from 'jquery';
import { LoginProveraService } from '../login-provera.service';


@Component({
  selector: 'app-mesta',
  templateUrl: './mesta.component.html',
  styleUrls: ['./mesta.component.css']
})



export class MestaComponent implements OnInit {
  element;
  constructor(private mestoService: MestoService,
              private loginProveraService: LoginProveraService) { }

  ngOnInit() {
    this.dajSvaMesta();
    this.ulogovan = this.loginProveraService.loginProvera();
  }

  mesta;
  editMesto;
  moze=false;
  ulogovan;

  dajSvaMesta(){
    this.mestoService.svaMesta().subscribe(
      success=> this.mesta = success,
      error => alert("Greska prilikom ucitavanja mesta")
    )
  }

  onSubmitMesto(mesto){
    console.log(mesto)
    this.mestoService.dodajMesto(mesto).subscribe(
      success => {
        this.dajSvaMesta();
        $("#mestoModal .close").click()
        $("#mestoForma").reset();
      },
      error => {
        alert("Greska u dodavanju mesta");
    }
    )
  }

  izbrisiMesto(mesto){
    if(confirm("Da li zelite da izbrisete " + mesto.grad + " ?")){
      this.mestoService.izbrisiMesto(mesto.id).subscribe(
        success => this.dajSvaMesta(),
        error => alert("Nije moguce izbrisati mesto!")
      )
    }
  }

  showEditModal(mesto){
    this.editMesto = mesto;
    this.moze = true;
    $("#openModal").click();

  }

  onSubmitMestoEdit(mesto){
    mesto.id = this.editMesto.id;
    console.log(mesto + "edited");
    if(confirm("Zelite li da izmenite mesto?")){
    this.mestoService.izmeniMesto(mesto).subscribe(
      success=> {
        console.log("Uspesno izmenjeno mesto");
        $("#editModal .close").click();
        this.dajSvaMesta();
      },
      error=> alert("Greska prilikom menjanja mesta")
    )
  }
  }

}
