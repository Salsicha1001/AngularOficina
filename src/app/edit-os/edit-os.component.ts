import { CartService } from './../Services/cart.service';
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

   

  id;
stt:status[]=[
  {name:'Aprovado'},
  {name:'Espera'},
  {name:'Negado'}
]
 peca:Peca={
   name:'',codBarras:null,marca:'',precoDeCompra:null,qtd:null,Empresa:'',data:new Date(),precoDeVenda:null,lucro:null
 }
cart:Cart={

  item:[{}],totalPrice:null,totalQtd:null,CODVERIF:null
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
  constructor(private osService: OsServiceService,private cartService:CartService, private dialog:MatDialog, private router: Router,private route: ActivatedRoute,private produtcService: ProdutcsService) {
   }
   

  ngOnInit() {
   
  this.des=  this.route.params.subscribe((params:any)=>{
      this.id=  params['id']
  
    })

    this.simplereqos$ = this.osService.getid(this.id)
    
     this.cartService.get().subscribe((c)=>{
       
      for(let key in c){
      
        //console.log(c[key])
        if(c[key].IDOS == this.id){
          let li:Cart={
            id:c[key].id,
            item:[{NOME:c[key].NOME,PRECODEVENDA:c[key].PRECODEVENDA}],totalPrice:c[key].totalPrice,totalQtd:c[key].totalQtd, CODVERIF:c[key].CODVERIF
          } 
       
          this.newCart.push(li)
        }  
        
      }
    
    })
    console.log(this.newCart)
  }


  add(){
   
    let list:Cart={

      item:[{}],totalPrice:null,totalQtd:1
    } 
    const dialogRef = this.dialog.open(AdcPecasComponent, {
      width: '600px',
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' );
     // console.log(this.newCart)
     var ff = false
      for(let key in this.newCart){
        for(let k in result){
        list.CODVERIF = result[k].CODVERIF
     
      
        if(this.newCart[key].CODVERIF != list.CODVERIF){
          list.totalPrice = result[k].PRECODEVENDA
          list.idos = this.id
         list.item=result
        }else{
          ff = true
          alert("Esse produto ja esta cadastrado")
    
        }
      }
      
  }
  if(ff == false){
    this.newCart.push(list)
    this.cartService.save(list).subscribe()
      }
  })
      
 
}
  


///




  addqtd(i){
 for(let key in this.newCart){
   if(this.newCart[key] == i){
     //console.log(this.newCart[key].item)
     var tt = this.newCart[key].item
      for(let a in tt){
     //   console.log(tt[a].PRICE)
     var v = tt[a].PRECODEVENDA
      }
   }
 }
    for(let key in this.newCart){
      if(this.newCart[key]== i){
        this.newCart[key].totalQtd++
       this.newCart[key].totalPrice =v *this.newCart[key].totalQtd
      }
    }
  }



  removeqtd(i){

    for(let key in this.newCart){
      if(this.newCart[key] == i){
        //console.log(this.newCart[key].item)
        var tt = this.newCart[key].item
         for(let a in tt){
        //   console.log(tt[a].PRICE)
        var v = tt[a].PRECODEVENDA
         }
      }
    }
    for(let key in this.newCart){
      if(this.newCart[key]== i){
      
        if(this.newCart[key].totalQtd>1){
        this.newCart[key].totalQtd--
        this.newCart[key].totalPrice -=v
        }else{
         var a = this.newCart[key]
     
        this.cartService.delete(i).subscribe()
        var b=  this.newCart.indexOf(a)
      //  console.log(i)
      
          this.newCart.splice(b,1)
         
        }
      }
    }
  }








  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.des.unsubscribe()

  }

}
