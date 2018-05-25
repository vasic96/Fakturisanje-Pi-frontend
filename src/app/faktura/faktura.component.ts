import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaktureService } from '../fakture.service';
import { StavkeCenovnikaService } from '../stavke-cenovnika.service';
import * as $ from 'jquery';
import { LoginProveraService } from '../login-provera.service';


@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.css']
})
export class FakturaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private faktureService: FaktureService,
              private stavkeService: StavkeCenovnikaService,
              private loginProveraService: LoginProveraService) { }
  
  fakturaId;
  faktura;
  done = false;
  stavke;
  stavkeFakture;
  ulogovan;

  ngOnInit() {
    this.fakturaId = this.route.snapshot.paramMap.get('id');
    this.ucitaj();
    this.ucitajStavke();
    this.ucitajStavkeFakture();
    this.ulogovan = this.loginProveraService.loginProvera();
    console.log(this.ulogovan);
    
  }

  ucitaj(){
    this.faktureService.fakturaPoId(this.fakturaId).subscribe(
      success => {
        console.log(success);
        this.faktura = success;
        this.done = true;
      },
      error => {
        console.log(error);
      }
    )
  }

  ucitajStavkeFakture(){
    this.faktureService.dajStavkePoFakturi(this.fakturaId).subscribe(
      success => this.stavkeFakture = success,
      error => console.log(error)
    );
  }

  ucitajStavke(){
    this.stavkeService.sveStavkeCenovnika().subscribe(
      data => this.stavke = data,
      error => console.log(error)
    )
  }

  onSubmitStavka(stavka){
    stavka.fakturaId = this.fakturaId;
    console.log(stavka);
    this.faktureService.dodajStavku(stavka).subscribe(
      success => {
        this.ucitaj();
        this.ucitajStavkeFakture();
        $("#stavkaModal .close").click();
      }
    )
  }

  izbrisiStavku(id){
    if(confirm("Da li zelite da izbrisete stavku?")){
      this.faktureService.izbrisiStavku(id).subscribe(
        success=>{
          this.ucitaj();
          this.ucitajStavkeFakture();
        },error => alert("Greska prilikom brisanja stavke fakture")
      )
    }
  }


}
