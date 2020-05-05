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
  
   constructor(   public dialogRef: MatDialogRef<EditOsComponent>,
    @Inject(MAT_DIALOG_DATA) public p:[]) { 
      this.valor = p
    }
    
    pag:Pagameto={
      forma:'',
      pago:null,
      parcela:null,
      restante:null,
      total:null,
      
    }

  ngOnInit(): void {
      this.res = this.valor
  }
  onSubmit(){

  }
  divisao(){
    this.res = this.valor/parseFloat(this.parcela)
    if(this.res<0){
      this.troco = this.res - this.valor
      this.res = 0
    }
   
  }
  dep(){
    this.troco = 0
    this.res = this.valor -this.pgd
    if(this.res<0){
      this.troco = this.valor - this.pgd

      this.res = 0
    }
    this.troco = 0

    this.pag.forma = this.forma
    this.pag.pago = this.pgd
   
    this.pag.total = this.valor
    this.pag.restante = this.res
  }
  dinhe(){
    this.res = this.valor -this.dinheiro
    this.troco = 0
    if(this.res<0){
      this.troco = this.dinheiro - this.valor
      this.troco = this.troco *-1
      this.res = 0
    }
  }

}
