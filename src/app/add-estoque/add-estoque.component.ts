import { Observable } from 'rxjs';

import { ProdutcsService } from './../Services/produtcs.service';
import { Peca } from './produto.model';


import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-add-estoque',
  templateUrl: './add-estoque.component.html',
  styleUrls: ['./add-estoque.component.css']
})
export class AddEstoqueComponent implements OnInit {
  simpleRqProd$ :Observable<Peca[]>
 peca:Peca={
   name:'',codBarras:null,marca:'',price:'',qtd:null,Empresa:'',data:new Date()
 }
 newProduct:Peca[]=[]
  dataSource: any;
  produt :Peca[]
  a: any;
  
  constructor(private produtcService: ProdutcsService, private snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.simpleRqProd$ =  this.produtcService.get()
  }

  onSubmit(){
    console.log(this.peca)
    this.produtcService.save(this.peca).subscribe((p:Peca)=>{
      this.newProduct.push(p)
      this.peca.name=""
      this.peca.marca=""
      this.peca.price=""
      this.peca.qtd=null
      this.peca.codBarras=null
    },
    
    (err)=>{
      console.error(err)
      let config = new MatSnackBarConfig();
     config.duration= 2000;
    if(err.status == 0){
      config.panelClass=['snack_error'];
      this.snackBar.open("Deu um erro ao conecta ao server")
     }})
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
