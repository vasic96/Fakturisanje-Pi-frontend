import { Component, OnInit, ViewChild } from '@angular/core';
import { MestoService } from '../mesto.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-mesta',
  templateUrl: './mesta.component.html',
  styleUrls: ['./mesta.component.css']
})

export class MestaComponent implements OnInit {

  constructor(private mestoService: MestoService) { }

  ngOnInit() {
    this.dajSvaMesta();
  }
  @ViewChild('mestoModal') public modal;

  mesta;

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

}
