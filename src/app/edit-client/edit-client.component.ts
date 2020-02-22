import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Client } from './../register-client/client.model';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  cliente:Client={ id:'',  Name:'', Cpf:0,Date:new Date(),Tell:0,Email:'',people:''
  }
  constructor(public dialogRef:MatDialogRef<EditClientComponent>,
    @Inject(MAT_DIALOG_DATA)public c :Client) {
      this.cliente = c;
     }

  ngOnInit() {
  }
  cancel(){
    this.dialogRef.close()
  }
  onSubmit(){
    
  }

}
