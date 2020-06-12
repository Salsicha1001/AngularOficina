import { CartService } from './../Services/CartService/cart.service';
import { RelatorioComponent } from './../relatorio/relatorio.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { RelatorioService } from '../Services/Relatorio/relatorio.service';

@Component({
  selector: 'app-relatorio-funcionario',
  templateUrl: './relatorio-funcionario.component.html',
  styleUrls: ['./relatorio-funcionario.component.css']
})
export class RelatorioFuncionarioComponent implements OnInit {
  date=[]
  datei:string
  datef:string
  funcio:string

  nome:string
  total=0
  constructor( public dialogRef: MatDialogRef<RelatorioComponent>,private relaService:RelatorioService,private cartService:CartService,
    @Inject(MAT_DIALOG_DATA) public p:[]) { 
      this.date.push(p)
    } 

  ngOnInit(): void {
    for(let key in this.date){
      this.funcio = this.date[key][0]
        this.datei=this.date[key][1]
        this.datef= this.date[key][2]
        
  }
 //console.log(this.funcio)
this.relaService.get(this.funcio,this.datei, this.datef).subscribe((o)=>{
  //console.log(o)
  for(let key in o){
    this.nome = o[key].FUNCIONARIO
  this.cartService.getcart(o[key].id).subscribe((c)=>{
    //console.log(c)
    for(let k in c){
     
      if(c[k].GANHOFUN!= null){
      this.total += c[k].GANHOFUN
      }
      
    }
   
    console.log(this.total)
    console.log(this.nome)
  })
  }
})

}

}
