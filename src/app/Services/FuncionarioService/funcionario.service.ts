import { FUNCIO } from './../../add-fun/Funcionario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  readonly url: string = 'http://localhost:3000'
  
  private Fun$ : BehaviorSubject<FUNCIO[]> = new BehaviorSubject<FUNCIO[]>(null)
  private loaded : boolean= false;
  constructor(private http: HttpClient) { }


  save(f:FUNCIO): Observable<FUNCIO>{
    return this.http.post<FUNCIO>(`${this.url}/savefuncionario`, f)
      }

      get(): Observable<FUNCIO[]> {
       
        return  this.http.get<FUNCIO[]>(`${this.url}/listfun`)
 
    }

    delet(p:FUNCIO){
      return this.http.delete(`${this.url}/deletfun/${p.id}`)
    }
}
