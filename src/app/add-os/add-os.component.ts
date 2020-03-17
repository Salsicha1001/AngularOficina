import { OsServiceService } from './../Services/os-service.service';
import { OrdemService } from './OrdemS.model';
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
import { MatSnackBar } from '@angular/material';


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
 

  os:OrdemService = {
    CLIENTE:'',PLACA:'',MODELO:'',MARCA:'',ANO:null,FUNCIONARIO:'',DATEP:'',DATEI:'',OBS:'',IDCLIENT:'',IDFUNCIONARIO:''
  }

  
  day:number
  month:number
  year:number
  finaly:string
  dates = Date.now()
  
  newOS:OrdemService[]=[]
  options:string[]= []
  nameFuncio:string[]=[]
  teste:any[]=[]
  idClient:any

  constructor(private clientService:ClientsService, private funcionarioService:FuncionarioService,  private snackBar: MatSnackBar, private osService: OsServiceService) { }

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
        
          this.options[key] = c[key].id +" "+c[key].NAME 
        }
      //  console.log(this.options)
      })
      this.funcion$.subscribe((f)=>{
        //console.log(f)
        for(let key in f){
          this.nameFuncio[key] =f[key].id+' '+ f[key].NOME
        }
    
      })



  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  addEvent($event){
    this.day = this.os.DATEP._i.date
    this.month = this.os.DATEP._i.month+1
    this.year = this.os.DATEP._i.year
    this.finaly = this.day+"/"+this.month+"/"+this.year
   // console.log(this.finaly)
  //
  }


  onSubmit(){
    if(this.finaly != undefined+"/"+NaN+"/"+undefined){
      this.os.DATEP = this.finaly
    }
    else{
      this.os.DATEP = this.os.DATEP._i
    }
    var is  = this.os.FUNCIONARIO.substring(0,1)
    this.os.IDFUNCIONARIO = is
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    this.os.DATEI = diaF+"/"+mesF+"/"+anoF;

   this.os.IDCLIENT =this.myControl.value.charAt(0)
   this.os.IDFUNCIONARIO 
   console.log(this.os)
    this.snackBar.open('Salvo com sucesso','X',{
      duration:2000,
      verticalPosition:'top',
      panelClass:['snack_ok'],
    
    })
   this.osService.save(this.os).subscribe((p:OrdemService)=>{
    this.newOS.push(p)
  
  })
  
}

//pensando na vida noturna
}

