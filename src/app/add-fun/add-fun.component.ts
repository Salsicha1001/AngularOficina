import { CEPService } from './../Services/cep.service';
import { FuncionarioService } from './../Services/funcionario.service';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Cep } from './../EdCep/cep.model';
import { Component, OnInit } from '@angular/core';
import { FUNCIO } from './Funcionario.model';
import * as _moment from 'moment';
import {defaultFormatUtc as _rollupMoment} from 'moment';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';


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
  selector: 'app-add-fun',
  templateUrl: './add-fun.component.html',
  styleUrls: ['./add-fun.component.css'],
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
export class AddFunComponent implements OnInit {
  cep :Cep={
    cep:'',cidade:'',bairro:'', complemento:'', estado:'',logradouro:'',numero:null
  } 
  funci:FUNCIO ={
    NOME:'',CPF:'',DATE:new Date(),TELL:'',EMAIL:'',CEP:{}
  }
  newFun:FUNCIO[]=[]
  day:number
  month:number
  year:number
  finaly:string

  constructor( private snackBar: MatSnackBar, private funService:FuncionarioService, private cepService:CEPService) { }

  ngOnInit() {

    
  }
  addEvent($event){
    this.day = this.funci.DATE._i.date
    this.month = this.funci.DATE._i.month+1
    this.year = this.funci.DATE._i.year
    this.finaly = this.day+"/"+this.month+"/"+this.year
  console.log(this.finaly)
  //
  }
  onSubmit(){
    this.funci.DATE = this.finaly
    this.funci.CEP = this.cepService.emmitCep
      this.funService.save(this.funci).subscribe((f:FUNCIO)=>{
        this.newFun.push(f)
        alert('Salvo com sucesso')
      },
      
     (err)=>{
      console.error(err)
      let config = new MatSnackBarConfig();
     config.duration= 2000;
    if(err.status == 0){
      config.panelClass=['snack_error'];
      this.snackBar.open("Deu um erro ao conecta ao server")
     } 
  })


  }
}
