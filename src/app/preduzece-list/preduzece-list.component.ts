import { Component, OnInit } from '@angular/core';
import { PreduzeceService } from '../preduzece.service';

@Component({
  selector: 'app-preduzece-list',
  templateUrl: './preduzece-list.component.html',
  styleUrls: ['./preduzece-list.component.css']
})
export class PreduzeceListComponent implements OnInit {

  constructor(private preduzeceService: PreduzeceService) { }

  ngOnInit() {
    this.svaPreduzeca1();
  }

  preduzeca;

  svaPreduzeca1(){
    this.preduzeceService.svaPreduzeca().subscribe(
      data => this.preduzeca = data,
      error => alert("Greska prilikom ucitavanja preduzeca")
    )
  }

}
