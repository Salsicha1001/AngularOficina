import { MatPaginator } from '@angular/material/paginator';
import { ServicoService } from '../Services/ServicoService/servico.service';
import { MatTableDataSource } from '@angular/material/table';

import { Peca } from './../add-estoque/produto.model';
import { Observable, Subscription, observable } from 'rxjs';
import { ProdutcsService } from '../Services/ProductService/produtcs.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { EditOsComponent } from '../edit-os/edit-os.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  
  selector: 'app-adc-pecas',
  templateUrl: './adc-pecas.component.html',
  styleUrls: ['./adc-pecas.component.css']
})
export class AdcPecasComponent implements OnInit {
  DataTable: any;
  displayedColumns: string[] = ['name','adicionar'];
  DataTableServ: any;
 obj=[{}]
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

adc(i){
  var b = false
     if(this.obj.length!=0){
        b =true
      }
      if(b == false){
         this.obj.push(i)
        }else{
          alert("Selecione um item por vez")
      }

}
 

  constructor(private produtcService: ProdutcsService, private route: ActivatedRoute ,private servicoService:ServicoService,
    public dialogRef: MatDialogRef<EditOsComponent>,
    @Inject(MAT_DIALOG_DATA) public p:[]
  ) {  this.obj = p 
     this.produtcService.get()

     
 }

  ngOnInit(): void {
    this.produtcService.get().subscribe(res=>{
      this.DataTable = new MatTableDataSource();  
      this.DataTable.data = res;  
      this.DataTable.paginator = this.paginator; 
    })
  

  this.servicoService.getAll().subscribe(ress=>{
    this.DataTableServ = new MatTableDataSource();  
    this.DataTableServ.data = ress;  
    this.DataTableServ.paginator = this.paginator; 
  })
}







}
