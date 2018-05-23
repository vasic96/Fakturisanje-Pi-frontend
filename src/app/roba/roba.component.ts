import { Component, OnInit } from '@angular/core';
import { RobaService } from '../roba.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-roba',
  templateUrl: './roba.component.html',
  styleUrls: ['./roba.component.css']
})
export class RobaComponent implements OnInit {

  constructor(private robaService: RobaService) { }

  ngOnInit() {

    this.allRoba();
  }

  r;

  allRoba(){

    this.robaService.allRoba().subscribe(

      data => this.r = data,
      error => alert("greska pri ucitavanju Robe")
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
