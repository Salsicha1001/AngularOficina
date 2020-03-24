import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrdemService } from './../add-os/OrdemS.model';
import { OsServiceService } from './../Services/os-service.service';
import { Component, OnInit } from '@angular/core';

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
  
  constructor(private osService:OsServiceService,private router: Router) { }

  ngOnInit() {
    this.simpleRqos$= this.osService.get()
    
  }
 
  getos(o:OrdemService){
   console.log(o)
    this.router.navigate(['/EditOS',o.id])
  }

}
