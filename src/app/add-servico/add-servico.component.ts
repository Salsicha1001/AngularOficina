import { Observable } from 'rxjs';
import { ServicoService } from './../Services/servico.service';
import { Servico } from './servico.model';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import {Component, OnInit, ViewChild, Output} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-servico',
  templateUrl: './add-servico.component.html',
  styleUrls: ['./add-servico.component.css']
})
export class AddServicoComponent implements OnInit {
  simpleServ$:Observable <Servico[]>
  newServ:Servico[] =[]
  MyDataSource: any; 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 
  serv:Servico={
    descricao:'',valor:null, lucro:null, ganhodono:null, ganhoFuncionario:null
  }
  
  constructor(private servicoService:ServicoService,private snackBar: MatSnackBar) { 
  
  }
  displayedColumns: string[] = ['descricao','lucro','valor','ganhodono','ganhoFuncionario','delete'];

  ngOnInit() {
    this.servicoService.getAll().subscribe(res=>{
      this.MyDataSource = new MatTableDataSource();  
      this.MyDataSource.data = res;  
      this.MyDataSource.paginator = this.paginator; 
      console.log(this.MyDataSource.data);  
    })
  }



  onSubmit(){
    var x = this.serv.valor
    var y= this.serv.lucro
    var z = x*y
    var resultDono = z/100
    var resultFun =x-resultDono
    this.serv.ganhoFuncionario = resultFun.toFixed(2) as any
    this.serv.ganhodono = resultDono.toFixed(2) as any
    console.log(this.serv)
     alert("Salvo com Sucesso, atualize a pagina quando for possível")
    this.servicoService.save(this.serv).subscribe((p:Servico)=>{
      this.newServ.push(p) 
     
  }),
  (err)=>{
    console.error(err)
    let config = new MatSnackBarConfig();
   config.duration= 2000;
  if(err.status == 0){
    config.panelClass=['snack_error'];
    this.snackBar.open("Deu um erro ao conecta ao server")
   }
  }
  
}






delet(i:Servico){
  console.log(i.id)
 this.servicoService.deletSer(i).subscribe()
 alert("Deletado com sucesso, atualize a pagina quando for possível")
 
}









}

