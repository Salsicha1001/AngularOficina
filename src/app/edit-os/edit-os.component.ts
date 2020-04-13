import { Cart } from './cart.model';
import { AdcPecasComponent } from './../adc-pecas/adc-pecas.component';
import { MatDialog } from '@angular/material';
import { Peca } from './../add-estoque/produto.model';
import { ProdutcsService } from './../Services/produtcs.service';
import { EditOsModel } from './editOs.model';


import { Router, ActivatedRoute } from '@angular/router';
import { OrdemService } from './../add-os/OrdemS.model';
import { OsServiceService } from './../Services/os-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';



interface status {
  name: string;
}

@Component({
  selector: 'app-edit-os',
  templateUrl: './edit-os.component.html',
  styleUrls: ['./edit-os.component.css']
})


export class EditOsComponent implements OnInit {

    obj=[{}]

  id;
stt:status[]=[
  {name:'Aprovado'},
  {name:'Espera'},
  {name:'Negado'}
]

cart:Cart={
  item:[{totalPrice:null,totalQtd:null}]
}
newCart:Cart[]=[]

simpleRqProd$ :Observable<Peca[]>
  des:Subscription;
  simplereqos$ :Observable<OrdemService>
  os:OrdemService = {
    CLIENTE:'',PLACA:'',MODELO:'',MARCA:'',ANO:null,FUNCIONARIO:'',DATEP:'',DATEI:'',OBS:'',IDCLIENT:'',IDFUNCIONARIO:''
  }
  osed:EditOsModel={
    idOs:this.id,SERVICOS:[],STATUS:''  }
  constructor(private osService: OsServiceService, private dialog:MatDialog, private router: Router,private route: ActivatedRoute,private produtcService: ProdutcsService) {
   }
   

  ngOnInit() {

  this.des=  this.route.params.subscribe((params:any)=>{
      this.id=  params['id']
  
    })
console.log(this.id)
    this.simplereqos$ = this.osService.getid(this.id)
    
    
  }


  add(){
   
    const dialogRef = this.dialog.open(AdcPecasComponent, {
      width: '600px',
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      for(let key in result){
        
        this.obj[key] = result[key]
       // console.log(this.obj[key])
      
        this.cart.item[key]=result[key] 
       Array.prototype.push.apply(this.cart,this.cart.item)
  
      }
      console.log(this.cart)
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.des.unsubscribe()

  }

}
