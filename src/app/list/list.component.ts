import { CarService } from './../Services/car.service';
import { Veiculo } from './../register-client/veiculo.model';
import { EditClientComponent } from './../edit-client/edit-client.component';
import { Client } from './../register-client/client.model';
import { ClientsService } from '../Services/clients.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { AddCarComponent } from '../add-car/add-car.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  simpleRqClient$ :Observable<Client[]>
  simpleRqCar$ :Observable<Veiculo[]>
  clientsEdit:Client[]
  carAdd:Veiculo[]
  
  DataSource = new ClientDataSource(this.clientService)
  displayedColmns=['id','Name','cpf','tell','data','email']
  constructor(private clientService: ClientsService, private dialog:MatDialog,private carService: CarService
    ) { }

  ngOnInit() {
   // this.clientService.get().subscribe((c)=>console.log(c))
    this.carService.get().subscribe((v)=> console.log(v))
    
  
  }


  editClient(c:Client){
  let newClient: Client = Object.assign({...c})
  let dialogRef = this.dialog.open(EditClientComponent,{width:'400px', data:newClient})
 
  dialogRef.afterClosed().subscribe((res :Client)=>{
    //console.log(res)
    if(res)
      this.clientService.editClient(res).subscribe((resp)=>{
      let i = this.clientsEdit.findIndex(client=>c.id ==client.id)
      if(i>=0)
      this.clientsEdit[i]=  resp

      }),(err)=>console.error(err)
  })

  }
  addCar(v:Veiculo){
    let newCar: Veiculo = Object.assign({...v})
    let dialogRef1 = this.dialog.open(AddCarComponent,{width:'700px', data:newCar})
    dialogRef1.afterClosed().subscribe((res :Veiculo)=>{
      //console.log(res)
      if(res)
        this.carService.editCar(res).subscribe((resp)=>{
        let i = this.carAdd.findIndex(car=>v.id ==car.id)
        if(i>=0)
        this.carAdd[i]=  resp
  
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
export class CarDataSource extends DataSource<any>{
  constructor(private carService:CarService){ 
   super();
}

    connect():Observable<Veiculo[]>{
      return this.carService.get()
    }
    disconnect(){
    }
}