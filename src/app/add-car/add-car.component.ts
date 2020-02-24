import { Client } from './../register-client/client.model';
import { Veiculo } from './../register-client/veiculo.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  cliente:Client={ id:'',  Name:'', Cpf:0,Dates:new Date(),Tell:0,Email:'',people:'',
}
  car:Veiculo={
    Ano:null,Modelo:"",Placa:"",Marca:"",Cor:'',KM:null,user:[this.cliente] }

  constructor(public dialogRef:MatDialogRef<AddCarComponent>,
    @Inject(MAT_DIALOG_DATA)public v :Veiculo) {
      this.car = v;
     }

  ngOnInit() {
  }
  cancel(){
    this.dialogRef.close()
  }
  onSubmit(){
    
  }

}