import { OrdemService } from './../add-os/OrdemS.model';


import { Client } from './../register-client/client.model';
import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  readonly url: string = 'http://localhost:3000'
  readonly url1: string = 'http://localhost:3000/list'
  private ClientSub$ : BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(null)
  private loaded : boolean= false;
   a= {}
  constructor(private http: HttpClient) { }

  get(): Observable<Client[]> {
    if(!this.loaded){
      this.http.get<Client[]>(this.url1)
      .subscribe(this.ClientSub$)
      this.a = [this.ClientSub$.asObservable]
      this.loaded = true
    }

  return this.ClientSub$.asObservable()
}



 



  save(v:Client): Observable<Client>{
return this.http.post<Client>(`${this.url}/saveclient`, v)
  }
  

  editClient(c:Client): Observable<Client>{
   return this.http.patch<Client>(`${this.url}/list/${c.id}`, c)
  }


}
