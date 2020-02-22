import { Observable } from 'rxjs';
import { ClientDataSource } from './../list/list.component';
import { DataSource } from '@angular/cdk/collections';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

import { Veiculo } from './veiculo.model';
import { Client } from './client.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as _moment from 'moment';

import {defaultFormatUtc as _rollupMoment} from 'moment';
import { ClientsService } from '../Services/clients.service';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

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
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
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
export class RegisterClientComponent implements OnInit {
  

  cliente:Client={
    Name:'', Cpf:null,Date:new Date(),Tell:null,Email:'',people:''
  }


  client:Client[]=[]
  newClient:Client[]= []

  //Dia/mes/ano
  day:number
  month:number
  year:number
  finaly:string


  model:string
  marca:string
  ano:number
  cor:string
  placa:any
  km:number
  veiculo :Veiculo[]=[]
 

  constructor(private router:Router,private _adapter: DateAdapter<any>, private clientsService:ClientsService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
 
 
  addEvent(event){
    this.day = this.cliente.Date._i.date
    this.month = this.cliente.Date._i.month+1
    this.year = this.cliente.Date._i.year
    this.finaly = this.day+"/"+this.month+"/"+this.year
  //  console.log(this.finaly)
  //
  }

  save(Name:string, Cpf:number,Date:string,  Tell:number, Email:string, people:string){
   // console.log(this.finaly)
    let c = {Name, Cpf, Tell, Date:this.finaly,Email,people}
    console.log(c)
    this.cliente.Name=""
    this.cliente.Tell= null
    this.cliente.Cpf = null
    this.cliente.Date=""
    this.cliente.Email=""
    
  this.clientsService.saveClient(c).subscribe((c:Client)=>{

     this.newClient.push(c)
 
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

  onSubmit(){
    console.log(this.cliente)
    
    this.clientsService.saveClient(this.cliente).subscribe((c:Client)=>{

      this.newClient.push(c)
  
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

  clear(){
    this.cliente.Name=""
    this.cliente.Tell= null
    this.cliente.Cpf = null
    this.cliente.Date=""
    this.cliente.Email=""

  }

}
export class ClientData extends DataSource<any>{
  constructor(private clientsService:ClientsService){ 
   super();
}
connect():Observable<Client[]>{
  return this.clientsService.getClients()
}
disconnect(){

}
}

