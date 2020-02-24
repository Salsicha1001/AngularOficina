import { Peca } from './produto.model';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-estoque',
  templateUrl: './add-estoque.component.html',
  styleUrls: ['./add-estoque.component.css']
})
export class AddEstoqueComponent implements OnInit {
 peca:Peca={
   name:'',codBarras:null,marca:'',price:'',qtd:null
 }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.peca)
  }
}
