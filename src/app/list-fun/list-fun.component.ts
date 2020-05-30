import { MatTableDataSource } from '@angular/material/table';
import { FuncionarioService } from './../Services/FuncionarioService/funcionario.service';
import { MatPaginator } from '@angular/material/paginator';
import { FUNCIO } from './../add-fun/Funcionario.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-list-fun',
  templateUrl: './list-fun.component.html',
  styleUrls: ['./list-fun.component.css']
})
export class ListFunComponent implements OnInit {
  list:FUNCIO[]
  os:FUNCIO = {
    CPF:null,NOME:'',DATE:'',EMAIL:'',TELL:null
  }
  DataTable: any; 
  displayedColumns: string[] = ['ID','NOME','CPF','EMAIL','DATA DE NASCIMENTO','TELEFONE', 'DELETAR'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private FuncionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.FuncionarioService.get().subscribe((os)=>{
      this.DataTable = new MatTableDataSource();  
      this.DataTable.data = os;  
      this.DataTable.paginator = this.paginator; 
      this.DataTable.sort = this.sort
   })
  }

  delet(i){
    console.log(i)
    var r= confirm("Tem Certeza?")
    if (r == true) {
      this.FuncionarioService.delet(i).subscribe()
      alert("Deletado com Sucesso, Atualize a página")
    } 
  }
}
