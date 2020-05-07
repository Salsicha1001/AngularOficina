import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CEPService } from '../Services/CepService/cep.service';
import { Cep } from './../EdCep/cep.model';

import { EditClientComponent } from './../edit-client/edit-client.component';
import { Client } from './../register-client/client.model';
import { ClientsService } from '../Services/ClientService/clients.service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  DataTable: any; 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;;
 
  clientsEdit:Client[]
  displayedColumns: string[] = ['id','Nome','Cpf','Email','Data de Nascimento','Telefone','CEP','Editar','Deletar'];
  

  constructor(private clientService: ClientsService, private dialog:MatDialog, private cepService:CEPService
    ) { }

  ngOnInit() {
   this.clientService.get().subscribe((c)=>{
    this.DataTable = new MatTableDataSource();  
    this.DataTable.data = c;  
    this.DataTable.paginator = this.paginator; 
   })

  }
delet(i){
this.clientService.delet(i).subscribe()
}
  editClient(c:Client){
  let newClient: Client = Object.assign({...c})
  let dialogRef = this.dialog.open(EditClientComponent,{width:'700px', data:newClient})
 
  dialogRef.afterClosed().subscribe((res :Client)=>{
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
