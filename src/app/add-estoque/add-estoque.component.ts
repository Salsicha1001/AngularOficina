import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';

import { ProdutcsService } from './../Services/produtcs.service';
import { Peca } from './produto.model';


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-add-estoque',
  templateUrl: './add-estoque.component.html',
  styleUrls: ['./add-estoque.component.css']
})
export class AddEstoqueComponent implements OnInit {
  simpleRqProd$ :Observable<Peca[]>
  DataTable: any; 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 peca:Peca={
   name:'',codBarras:null,marca:'',precoDeCompra:null,qtd:null,Empresa:'',data:new Date(),precoDeVenda:null,lucro:null
 }
 newProduct:Peca[]=[]
  dataSource: any;
  produt :Peca[]
  a: any;
  displayedColumns: string[] = ['name','marca','Empresa','codBarras','qtd','precoDeCompra','lucro','precoDeVenda','delete'];
  
  constructor(private produtcService: ProdutcsService, private snackBar: MatSnackBar) { }
  
  ngOnInit() {
   this.produtcService.get().subscribe(res=>{
    this.DataTable = new MatTableDataSource();  
    this.DataTable.data = res;  
    this.DataTable.paginator = this.paginator; 
    console.log(this.DataTable.data);  
  })
  }

  onSubmit(){
   var a= (this.peca.precoDeCompra * this.peca.lucro)/ 100
   this.peca.precoDeVenda  = (this.peca.precoDeCompra + a).toFixed(2) as any
   console.log(this.peca)
    this.produtcService.save(this.peca).subscribe((p:Peca)=>{
      this.newProduct.push(p)
     
     
    },
    
    (err)=>{
      console.error(err)
      let config = new MatSnackBarConfig();
     config.duration= 2000;
    if(err.status == 0){
      config.panelClass=['snack_error'];
      this.snackBar.open("Deu um erro ao conecta ao server")
     }})
     this.snackBar.open('Salvo com sucesso','X',{
      duration:2000,
      verticalPosition:'top',
      panelClass:['snack_ok'],

    })
     this.peca.name=""
      this.peca.marca=""
      this.peca.precoDeCompra= null
      this.peca.qtd=null
      this.peca.codBarras=null
  }


  delet(i:Peca){
    console.log(i.id)
   this.produtcService.deletProd(i).subscribe()
   this.snackBar.open('Deletado com sucesso, por favor atualize a página','X',{
    duration:2000,
    verticalPosition:'top',
    panelClass:['snack_ok'],

   })
  }
  
}
