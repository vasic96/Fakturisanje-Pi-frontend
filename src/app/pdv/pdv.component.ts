import { Component, OnInit } from '@angular/core';
import { PdvService } from '../pdv.service';
import { error } from 'util';
import { StopaPdvService } from '../stopa-pdv.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.css']
})
export class PdvComponent implements OnInit {

  constructor(private pdvService: PdvService, private stopaPdvService: StopaPdvService) { }

  ngOnInit() {
    this.allPdv();
    this.allStopaPdv();
  }

  pdv_e;
  stopa;


  allStopaPdv(){

    this.stopaPdvService.allStopaPdv().subscribe(

      data=> this.stopa=data,

      error => alert("greska pri ucitavanju stope Pdv-a")
    )
  }
    onSubmitPdv(pdv){

      console.log(pdv)

      this.pdvService.addPdv(pdv).subscribe(
          success => {
            this.allPdv();
            $("#PdvForma.close").click()

          },
          error => {

            alert("greska u snimanju pdv-a")
          }

      )
    }
      onSubmitStopaPdv(stopaPdv){
        console.log(stopaPdv)

        this.stopaPdvService.addStopaPdv(stopaPdv).subscribe(

            success=> {

              this.allStopaPdv();
              $("#stopaPdvForma.close").click()

            },
            error => {

              alert("greska u dodavanju stope Pdv-a")
            }
        )



      }

  
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

  deleteStopaPdv(stopaPdv){

    console.log(stopaPdv)
    if(confirm("stopa Pdv" + stopaPdv.procenat)){

        this.stopaPdvService.deleteStopaPdv(stopaPdv.id).subscribe(

          success => this.allStopaPdv(),
          error => alert("stopa pdv se ne moze izbrisati")
        )
    }
  }
}
