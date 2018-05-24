import { Component, OnInit } from '@angular/core';
import { PdvService } from '../pdv.service';
import { error } from 'util';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.css']
})
export class PdvComponent implements OnInit {

  constructor(private pdvService: PdvService) { }

  ngOnInit() {
    this.allPdv();
  }

  pdv_e;

  allPdv(){
    this.pdvService.allPdv().subscribe(


      data => this.pdv_e= data,
      error => alert("greska pri ucitavanju PDV-a")

    )

  }

  deletePdv(pdv){
    console.log(pdv)
    if(confirm("pdv"+ pdv.naziv)){

      this.pdvService.deletePdv(pdv.id).subscribe(

        success=> this.allPdv(),
        error => alert("pdv se ne moze izbrisati")
      )

    }

  }
}
