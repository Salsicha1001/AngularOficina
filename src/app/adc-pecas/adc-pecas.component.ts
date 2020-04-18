
import { Peca } from './../add-estoque/produto.model';
import { Observable, Subscription, observable } from 'rxjs';
import { ProdutcsService } from './../Services/produtcs.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { EditOsComponent } from '../edit-os/edit-os.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  
  selector: 'app-adc-pecas',
  templateUrl: './adc-pecas.component.html',
  styleUrls: ['./adc-pecas.component.css']
})
export class AdcPecasComponent implements OnInit {
  simpleRqProd$ : Observable<Peca[]>

 obj=[{}]
  

adc(i){
  var b = false
     if(this.obj.length!=0){
        b =true
      }
      if(b == false){
         this.obj.push(i)
        }else{
          alert("Selecione um item por vez")
      }

}
 

  constructor(private produtcService: ProdutcsService, private route: ActivatedRoute ,
    public dialogRef: MatDialogRef<EditOsComponent>,
    @Inject(MAT_DIALOG_DATA) public p:[]
  ) {  this.obj = p 
    this.simpleRqProd$ =  this.produtcService.get()

     
 }

  ngOnInit(): void {
   
  }

}
