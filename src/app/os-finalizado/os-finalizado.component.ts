import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OsServiceService } from './../Services/OsService/os-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { OrdemService } from './../add-os/OrdemS.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-os-finalizado',
  templateUrl: './os-finalizado.component.html',
  styleUrls: ['./os-finalizado.component.css']
})
export class OsFinalizadoComponent implements OnInit {

  list:OrdemService[]
  os:OrdemService = {
    CLIENTE:'',PLACA:'',MODELO:'',MARCA:'',ANO:null,FUNCIONARIO:'',DATEP:'',DATEI:'',OBS:'',IDCLIENT:'',IDFUNCIONARIO:''
  }
  DataTable: any; 
  displayedColumns: string[] = ['OS','Placa','Cliente','Modelo','Responsável','Data de Entrega','Opção'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private osService:OsServiceService,private router: Router) { }

  ngOnInit(): void {
    this.osService.getFin().subscribe((os)=>{
      this.DataTable = new MatTableDataSource();  
      this.DataTable.data = os;  
      this.DataTable.paginator = this.paginator; 
      this.DataTable.sort = this.sort
   })
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.DataTable.filter = filterValue;
  }
  getos(o:OrdemService){
   console.log(o)
    this.router.navigate(['/EditOS',o.id])
  }
}
