import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { EditOsComponent } from '../edit-os/edit-os.component';
import { Pagameto } from './Pag.Model';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  valor:any
  forma :any
  parcela="1"
  res:any
  pgd:any
  dinheiro:any
  troco=0
  id;
  
   constructor(   public dialogRef: MatDialogRef<EditOsComponent>,
    @Inject(MAT_DIALOG_DATA) public p:[]) { 
      this.valor = p
    }
    
    pag:Pagameto={
      FORMA:'',
      PAGO:null,
      PARCELA:null,
      RESTANTE:null,
      TOTAL:null,
      
    }

  ngOnInit(): void {
      this.res = this.valor
 

  }
  onSubmit(){

  }
  divisao(){
    this.res = this.valor/parseInt(this.parcela)
    this.res = this.res.toFixed(2);
    if(this.res<0){
      this.res = 0
    }
    this.pag.FORMA = this.forma
    this.pag.PAGO = this.res
    this.pag.PARCELA = this.parcela
    this.pag.TOTAL = this.valor
    this.pag.RESTANTE = 0
  }
  dep(){
    this.troco = 0
    this.res = this.valor -this.pgd
    if(this.res<0){
      this.troco = (this.valor - this.pgd)*-1 

      this.res = 0
    }else{
    this.troco = 0
    }
    this.pag.FORMA = this.forma
    this.pag.PAGO = this.pgd
  
    this.pag.TOTAL = this.valor
    this.pag.RESTANTE = this.res
  }
  dinhe(){
    this.res = this.valor -this.dinheiro
    this.troco = 0
    if(this.res<0){
      this.troco = this.dinheiro - this.valor
      this.troco = this.troco *-1
      this.res = 0
    }
    this.pag.FORMA = this.forma
    this.pag.PAGO = this.dinheiro
 
    this.pag.TOTAL = this.valor
    this.pag.RESTANTE = this.res
  }


}
