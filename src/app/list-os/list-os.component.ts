import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrdemService } from './../add-os/OrdemS.model';
import { OsServiceService } from './../Services/os-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-list-os',
  templateUrl: './list-os.component.html',
  styleUrls: ['./list-os.component.css']
})
export class ListOsComponent implements OnInit {
    simpleRqos$ :Observable<OrdemService[]>
    list:OrdemService[]
    os:OrdemService = {
      CLIENTE:'',PLACA:'',MODELO:'',MARCA:'',ANO:null,FUNCIONARIO:'',DATEP:'',DATEI:'',OBS:'',IDCLIENT:'',IDFUNCIONARIO:''
    }
    DataTable: any; 
    displayedColumns: string[] = ['OS','Placa','Cliente','Modelo','Responsável','Data de Entrega','Opção', 'deletar'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
  constructor(private osService:OsServiceService,private router: Router) { }

  ngOnInit() {
 this.osService.get().subscribe((os)=>{
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

  delet(i){
    console.log(i)
    var r= confirm("Tem Certeza?")
    if (r == true) {
      this.osService.deletOs(i).subscribe()
      alert("Deletado com Sucesso, Atualize a página")
    } 
  }
}
