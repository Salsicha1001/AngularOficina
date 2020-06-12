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
  constructor( public dialogRef: MatDialogRef<RelatorioComponent>,private relaService:RelatorioService,
    @Inject(MAT_DIALOG_DATA) public p:[]) { 
      this.date.push(p)
    } 

  ngOnInit(): void {
    for(let key in this.date){
        this.datei=this.date[key][0]
        this.datef= this.date[key][1]
        
  }
 // console.log(this.datei,this.datef)
this.relaService.get(this.datei, this.datef).subscribe()
}

}
