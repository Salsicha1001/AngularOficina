import { Cep } from './cep.model';

import { CEPService } from '../Services/CepService/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

cep = new Cep()  
  constructor(private cepService:CEPService) { }

  ngOnInit() {
  }

  search(){
    this.cepService.search(this.cep.cep).then((cep:Cep)=>{
      this.cep = cep
      console.log(this.cep)
    })
  }
 
}

