

import { Router, ActivatedRoute } from '@angular/router';
import { OrdemService } from './../add-os/OrdemS.model';
import { OsServiceService } from './../Services/os-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-edit-os',
  templateUrl: './edit-os.component.html',
  styleUrls: ['./edit-os.component.css']
})
export class EditOsComponent implements OnInit {
  id;

  des:Subscription;
  simplereqos$ :Observable<OrdemService>
  os:OrdemService = {
    CLIENTE:'',PLACA:'',MODELO:'',MARCA:'',ANO:null,FUNCIONARIO:'',DATEP:'',DATEI:'',OBS:'',IDCLIENT:'',IDFUNCIONARIO:''
  }

  constructor(private osService: OsServiceService, private router: Router,private route: ActivatedRoute) {

   }

  ngOnInit() {

  this.des=  this.route.params.subscribe((params:any)=>{
      this.id=  params['id']
  
    })
console.log(this.id)
    this.simplereqos$ = this.osService.getid(this.id)
    
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.des.unsubscribe()

  }

}
