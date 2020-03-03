import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { FuncionarioService } from './../Services/funcionario.service';
import { ClientsService } from './../Services/clients.service';
import { Client } from './../register-client/client.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { FUNCIO } from '../add-fun/Funcionario.model';
import * as _moment from 'moment';
import {defaultFormatUtc as _rollupMoment} from 'moment';

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
  selector: 'app-add-os',
  templateUrl: './add-os.component.html',
  styleUrls: ['./add-os.component.css'],
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
export class AddOsComponent implements OnInit {
  myControl = new FormControl();
  funcion$:Observable<FUNCIO[]>
  simpleRqClient$ :Observable<Client[]>
  filteredOptions: Observable<string[]>;

  
  day:number
  month:number
  year:number
  finaly:string
  
  options:string[]= []
  nameFuncio:string[]=[]
  teste:any[]=[]
  idClient:any

  constructor(private clientService:ClientsService, private funcionarioService:FuncionarioService) { }

  ngOnInit() {
    this.simpleRqClient$= this.clientService.get()
    this.funcion$ = this.funcionarioService.get()
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.simpleRqClient$.subscribe((c)=>{
        //console.log(c)
        for(let key in c){
          // console.log(c[key].NAME)
          this.options[key] = c[key].id +" "+c[key].NAME 
        }
      //  console.log(this.options)
      })
      this.funcion$.subscribe((f)=>{
        //console.log(f)
        for(let key in f){
          this.nameFuncio[key] =f[key].id+' '+ f[key].NOME
        }
      //  console.log(this.nameFuncio)
      })


  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  addEvent($event){

  //
  }
  onSubmit(){
    this.idClient =this.myControl.value.charAt(0)

  }

}
