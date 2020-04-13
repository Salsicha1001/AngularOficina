
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
  var a = false
  for(let key in this.obj){
      if(this.obj[key] == i){
        console.log(this.obj[key])
        a = true
      }
  }if(a== false){
 this.obj.push(i)
  }else{
    alert("Ja foi adicionado esse produto")
  }

}
 
save(){

}
  constructor(private produtcService: ProdutcsService, private route: ActivatedRoute ,
    public dialogRef: MatDialogRef<EditOsComponent>,
    @Inject(MAT_DIALOG_DATA) public p:[]
  ) {  this.obj = p 
    this.simpleRqProd$ =  this.produtcService.get()
    console.log(this.simpleRqProd$)
     
 }

  ngOnInit(): void {
   
  }

}
