import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaktureService } from '../fakture.service';

@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.css']
})
export class FakturaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private faktureService: FaktureService) { }
  
  fakturaId;
  faktura;
  done = false;

  ngOnInit() {
    this.fakturaId = this.route.snapshot.paramMap.get('id');
    this.ucitaj(this.fakturaId);
    
  }

  ucitaj(id){
    this.faktureService.fakturaPoId(id).subscribe(
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

}
