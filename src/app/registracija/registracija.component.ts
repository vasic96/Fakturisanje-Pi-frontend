import { Component, OnInit } from '@angular/core';
import { MestoService } from '../mesto.service';
import { RegistracijaService } from '../registracija.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private mestoService: MestoService,
              private registracijaService: RegistracijaService) { }

  ngOnInit() {
    this.dajSvaMesta();
  }

  
  mesta;

  dajSvaMesta(){
    this.mestoService.svaMesta().subscribe(
      data => this.mesta = data,
      error => alert("Ucitavanje mesta nije uspelo")
    )
  }

  onSubmit(preduzece){
    console.log(preduzece)
    this.registracijaService.registracija(preduzece).subscribe(
      data => alert("Registracija uspesna!"),
      error => alert("Greska prilikom registracije")
    )
  }

}
