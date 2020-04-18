import { Observable, BehaviorSubject } from 'rxjs';
import { Servico } from './../add-servico/servico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  readonly url: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
 

  save(s:Servico):Observable <Servico>{
    return this.http.post<Servico>(`${this.url}/saveservico`, s)

  }

getAll(){
  return  this.http.get<Servico[]>(`${this.url}/listserv`)
}

deletSer(s:Servico){
  return this.http.delete(`${this.url}/deleteserv/${s.id}`)
}
}

