import { Client } from './../register-client/client.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  readonly url: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]>{
   return this.http.get<Client[]>(`${this.url}/list`)
  }
 

  saveClient(c:Client): Observable<Client>{
   return this.http.post<Client>(`${this.url}/saveclient`, c)
  }

  editClient(c:Client): Observable<Client>{
   return this.http.patch<Client>(`${this.url}/list/${c.id}`, c)
  }

}
