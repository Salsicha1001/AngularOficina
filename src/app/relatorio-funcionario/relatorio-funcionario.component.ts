import { RelatorioComponent } from './../relatorio/relatorio.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-relatorio-funcionario',
  templateUrl: './relatorio-funcionario.component.html',
  styleUrls: ['./relatorio-funcionario.component.css']
})
export class RelatorioFuncionarioComponent implements OnInit {
  date=[]
  datei:any
  datef:any
  constructor( public dialogRef: MatDialogRef<RelatorioComponent>,
    @Inject(MAT_DIALOG_DATA) public p:[]) { 
      this.date.push(p)
    } 

  ngOnInit(): void {
    for(let key in this.date){
      
    }
  }

}
