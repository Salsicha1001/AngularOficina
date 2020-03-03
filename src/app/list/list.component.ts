import { CEPService } from './../Services/cep.service';
import { Cep } from './../EdCep/cep.model';

import { EditClientComponent } from './../edit-client/edit-client.component';
import { Client } from './../register-client/client.model';
import { ClientsService } from '../Services/clients.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cep :Cep={
    cep:'',cidade:'',bairro:'', complemento:'', estado:'',logradouro:'',numero:''
  } 
  cliente:Client={
    NAME:'', CPF:null,DATE:new Date(),TELL:null,EMAIL:'',PEOPLE:'', CEP:{}
  }
  filtered$: Observable<Client[]>;
  simpleRqClient$ :Observable<Client[]>
 
  clientsEdit:Client[]

  

  constructor(private clientService: ClientsService, private dialog:MatDialog, private cepService:CEPService
    ) { }

  ngOnInit() {
    this.simpleRqClient$= this.clientService.get()

  }


  editClient(c:Client){
  let newClient: Client = Object.assign({...c})
  let dialogRef = this.dialog.open(EditClientComponent,{width:'700px', data:newClient})
 
  dialogRef.afterClosed().subscribe((res :Client)=>{
    //console.log(res)
    if(res)
      this.clientService.editClient(res).subscribe((resp)=>{
      let i = this.clientsEdit.findIndex(client=>c.id ==client.id)
      if(i>=0){
      this.clientsEdit[i]=  resp
        alert('Salvo com sucesso')
    }
      }),(err)=>console.error(err)
  })

  }


}
export class ClientDataSource extends DataSource<any>{
   constructor(private clientsService:ClientsService){ 
    super();
 }

     connect():Observable<Client[]>{
       return this.clientsService.get()
     }
     disconnect(){

     }
}
//export class CarDataSource extends DataSource<any>{
  //constructor(private carService:CarService){ 
 //  super();
//}

   // connect():Observable<Veiculo[]>{
    //  return this.carService.get()
    //}
   // disconnect(){
   // }
//}