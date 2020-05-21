import { PageService } from './../Services/PagamentoService/page.service';
import { PagamentoComponent } from './../pagamento/pagamento.component';
import { CartService } from '../Services/CartService/cart.service';
import { Cart } from './cart.model';
import { AdcPecasComponent } from './../adc-pecas/adc-pecas.component';
import { MatDialog } from '@angular/material';
import { Peca } from './../add-estoque/produto.model';
import { ProdutcsService } from '../Services/ProductService/produtcs.service';



import { Router, ActivatedRoute } from '@angular/router';
import { OrdemService } from './../add-os/OrdemS.model';
import { OsServiceService } from '../Services/OsService/os-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Pagameto } from '../pagamento/Pag.Model';



@Component({
  selector: 'app-edit-os',
  templateUrl: './edit-os.component.html',
  styleUrls: ['./edit-os.component.css']
})


export class EditOsComponent implements OnInit {
  id;
mude:any

select:any
 peca:Peca={
   name:'',codBarras:null,marca:'',precoDeCompra:null,qtd:null,Empresa:'',data:new Date(),precoDeVenda:null,lucro:null
 }
cart:Cart={

  item:[{}],totalPrice:null,totalQtd:null
}
pageboll:Boolean = false
bottonCred:Boolean = false
total= 0
 newCart:Cart[]=[]
simpleRqProd$ :Observable<Peca[]>
  des:Subscription;
  simplereqos$ :Observable<OrdemService>
  os:OrdemService = {
    CLIENTE:'',PLACA:'',MODELO:'',MARCA:'',ANO:null,FUNCIONARIO:'',DATEP:'',DATEI:'',OBS:'',IDCLIENT:'',IDFUNCIONARIO:''
  }
  pages:Pagameto={
    FORMA:'',PAGO:'',PARCELA:null,TOTAL:null,RESTANTE:null
  }
  newPag:Pagameto[]=[]
  constructor(private osService: OsServiceService,private pagService: PageService,private cartService:CartService, private dialog:MatDialog, private pageService: PageService,private route: ActivatedRoute,private produtcService: ProdutcsService) {
   }
   

  ngOnInit() {
  this.des=  this.route.params.subscribe((params:any)=>{
      this.id=  params['id']
    })
    this.pagService.getId(this.id).subscribe((b)=>{
      console.log(b)
      for(let key in b){
        
        this.bottonCred = b[key].FORMA == 'cartaoCredito'
        console.log(this.bottonCred)
      }
    })
    this.simplereqos$ = this.osService.getid(this.id)
    this.osService.getid(this.id).subscribe((a)=>{
      this.mude = a
    
    this.select = a.STATUS
    })
     this.cartService.get().subscribe((c)=>{
       
      for(let key in c){

        if(c[key].IDOS == this.id){
          let li:Cart={
            id:c[key].id,
                    idos:this.id,item:[{NOME:c[key].NOME,PRECODEVENDA:c[key].PRECODEVENDA,
                     CODVERIF:c[key].CODVERIF}],totalPrice:c[key].totalPrice,
                     totalQtd:c[key].totalQtd,CODVERIF:c[key].CODVERIF
                  } 

          this.newCart.push(li)
        }  
        
      }
      var soma= [] as any
      for(let key in c){
        if(this.id == c[key].IDOS){  
        soma.push(c[key].totalPrice)
        }
      }
      for(var i = 0; i<soma.length; i++){
        this.total += soma[i]
      }
      console.log(this.total)
    })
    console.log(this.newCart)
  }

saveobs(){
  this.osService.eidtObs(this.mude).subscribe()
  alert("Foi alterado com sucesso!")
}
  add(){
   
    
    const dialogRef = this.dialog.open(AdcPecasComponent, {
      width: '800px',
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
 
      let list:Cart={
        id:null,
        item:[{}],totalPrice:null,totalQtd:1
      } 
      var ff = false

      if(this.newCart.length ==0){
        for(let k in result){
          list.CODVERIF = result[k].CODVERIF
          list.totalPrice = result[k].PRECODEVENDA
          list.idos = this.id
          list.item=result
      }
    }else{
      for(let key in this.newCart){
        for(let k in result){
          list.CODVERIF = result[k].CODVERIF
          if(this.newCart[key].CODVERIF != list.CODVERIF){
            list.totalPrice = result[k].PRECODEVENDA
          list.idos = this.id
          list.item=result
           } else{
            ff = true
            alert("Esse produto ja esta cadastrado")
           
      }
    }
  }
}

if(ff == false){
  this.newCart.push(list)
  this.cartService.save(list).subscribe()
  this.total += list.totalPrice
    }
  })
      
}
  


  addqtd(i){
 for(let key in this.newCart){
   if(this.newCart[key] == i){
     var tt = this.newCart[key].item
      for(let a in tt){
     var v = tt[a].PRECODEVENDA
      }
   }
 }
    for(let key in this.newCart){
      if(this.newCart[key]== i){
        this.newCart[key].totalQtd++
       this.newCart[key].totalPrice =v *this.newCart[key].totalQtd
       this.cartService.addQtd(i).subscribe()
       this.total += v
      }
    }
  }
teste(){
  this.mude.STATUS = this.select
  this.osService.patchStts(this.mude).subscribe()
}

  removeqtd(i){

    for(let key in this.newCart){
      if(this.newCart[key] == i){
        var tt = this.newCart[key].item
         for(let a in tt){
        var v = tt[a].PRECODEVENDA
         }
      }
    }
    for(let key in this.newCart){
      if(this.newCart[key]== i){
      
        if(this.newCart[key].totalQtd>1){
        this.newCart[key].totalQtd--
        this.newCart[key].totalPrice -=v
        this.cartService.addQtd(i).subscribe()
        this.total -= v
        }else{
         var a = this.newCart[key]
        this.cartService.delete(i).subscribe()
        var b=  this.newCart.indexOf(a)
          this.newCart.splice(b,1)
          this.total -= v
        }
      }
    }
  }



pag(){
  if(!this.pageboll){
  let page:Pagameto={
    IDOS:"",
    FORMA:'',
    PAGO:null,
    PARCELA:null,
    RESTANTE:null,
    TOTAL:null,
    
  } 
  const dialogRef = this.dialog.open(PagamentoComponent, {
    width: '600px',
    data: this.total
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result.forma !=""){
    
   page.FORMA = result.forma
    page.IDOS =this.id
    page.PARCELA = result.parcela
    page.PAGO = result.pago
    page.RESTANTE = result.restante
    page.TOTAL = result.total
  this.pageService.savePag(page).subscribe()
  this.pageboll = true
  alert("Pagamento salvo com sucesso, Atualize a pagina caso faça um novo salvamento")
    }
  })

  }else{
    alert("Atualize a pagina")
  }
}


  ngOnDestroy(): void {
    this.des.unsubscribe()

  }
  
}
