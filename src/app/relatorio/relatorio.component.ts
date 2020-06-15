import { FuncionarioService } from './../Services/FuncionarioService/funcionario.service';
import { RelatorioFuncionarioComponent } from './../relatorio-funcionario/relatorio-funcionario.component';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import * as _moment from 'moment';
import {defaultFormatUtc as _rollupMoment} from 'moment';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RelaDonoComponent } from '../rela-dono/rela-dono.component';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
  providers: [
   
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

  
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],

})
export class RelatorioComponent implements OnInit {
  datIn:any
  datFin:any
  datInDono:any
  datFinDono:any
  FUNCIONARIO:any
  dataInicial:any
  dataFinal:any
  dataInicialDono:any
  dataFinalDono:any
  funcion$: any;
  nameFuncio:string[]=[]
  constructor( private dialog:MatDialog, private FuncionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.funcion$ = this.FuncionarioService.get()
    this.funcion$.subscribe((f)=>{
      for(let key in f){
        this.nameFuncio[key] = f[key].id+' '+f[key].NOME
      }
  
    })
  }
  addEvent($event){
   var dia = this.datIn._i.date
   var month = this.datIn._i.month+1
   var year = this.datIn._i.year
   var finaly = dia+"/"+month+"/"+year
   this.dataInicial = finaly
  }
  addEventFi($event){
    var dia = this.datFin._i.date
    var month = this.datFin._i.month+1
    var year = this.datFin._i.year
    var finaly = dia+"/"+month+"/"+year
    this.dataFinal = finaly
   }
   addEventDono($event){
    var dia = this.datInDono._i.date
    var month = this.datInDono._i.month+1
    var year = this.datInDono._i.year
    var finaly = dia+"/"+month+"/"+year
    this.dataInicialDono = finaly
   }
   addEventFiDono($event){
     var dia = this.datFinDono._i.date
     var month = this.datFinDono._i.month+1
     var year = this.datFinDono._i.year
     var finaly = dia+"/"+month+"/"+year
     this.dataFinalDono = finaly
    }
onSubmit(){
 
  console.log(this.dataInicial ,this.dataFinal)
  const dialogRef = this.dialog.open(RelatorioFuncionarioComponent, {
    width: '800px',
    data: [this.FUNCIONARIO,this.dataInicial , this.dataFinal],

  });
  dialogRef.afterClosed().subscribe(result => {
    
  })
}
onSubmitDono(){
 
  
  const dialogRef = this.dialog.open(RelaDonoComponent, {
    width: '800px',
    data: [this.dataInicialDono , this.dataFinalDono],

  });
  dialogRef.afterClosed().subscribe(result => {
    
  })
}
}
