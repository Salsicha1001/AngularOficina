import { MatTableDataSource } from '@angular/material/table';
import { PageService } from './../Services/PagamentoService/page.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { EditOsComponent } from '../edit-os/edit-os.component';

@Component({
  selector: 'app-hist-pag',
  templateUrl: './hist-pag.component.html',
  styleUrls: ['./hist-pag.component.css']
})
export class HistPagComponent implements OnInit {
id:any
DataTable: any; 
displayedColumns: string[] = ['Forma','Parcela','Valor Total','Pago','Restante'];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
constructor(   public dialogRef: MatDialogRef<EditOsComponent>,private pagService: PageService, 
  @Inject(MAT_DIALOG_DATA) public p:[]) { 
    this.id = p
  }

  ngOnInit(): void {
    this.pagService.getId(this.id).subscribe((os)=>{
      this.DataTable = new MatTableDataSource();  
      this.DataTable.data = os;  
      this.DataTable.paginator = this.paginator; 
      this.DataTable.sort = this.sort
   })
    
  }

}
