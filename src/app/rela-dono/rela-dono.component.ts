import { CartService } from './../Services/CartService/cart.service';
import { RelatorioComponent } from './../relatorio/relatorio.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { RelatorioService } from '../Services/Relatorio/relatorio.service';

@Component({
  selector: 'app-rela-dono',
  templateUrl: './rela-dono.component.html',
  styleUrls: ['./rela-dono.component.css']
})
export class RelaDonoComponent implements OnInit {
  date=[]
  datei:string
  datef:string
  total=0
  constructor(public dialogRef: MatDialogRef<RelatorioComponent>,private relaService:RelatorioService,private cartService:CartService,
    @Inject(MAT_DIALOG_DATA) public p:[]) { 
      this.date.push(p)
    }
    
  ngOnInit(): void {
    for(let key in this.date){
      this.datei = this.date[key][0]
        this.datef=this.date[key][1]
    }
    console.log(this.datei,this.datef)
  
  this.relaService.getdono(this.datei, this.datef).subscribe((o)=>{
    for(let key in o){
    this.cartService.getcart(o[key].id).subscribe((c)=>{
      //console.log(c)
      for(let k in c){

        if(c[k].LUCRO!= null){
        this.total += c[k].LUCRO
        }
        
      }
     
      console.log(this.total)
    })
  }
  })



  }
  

}
