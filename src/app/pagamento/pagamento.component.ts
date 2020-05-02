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
    console.log(this.res)
  }
  dep(){
    this.res = this.valor -this.pgd
  }
  dinhe(){
    this.res = this.valor -this.dinheiro
  }

}
