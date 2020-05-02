import { HttpClient } from '@angular/common/http';
import { OrdemService } from './../add-os/OrdemS.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsServiceService {
  private os :OrdemService
  readonly url: string = 'http://localhost:3000'
  readonly url1: string = 'http://localhost:3000/listosall'
  private OSSub$ : BehaviorSubject<OrdemService[]> = new BehaviorSubject<OrdemService[]>(null)
  private OSSub1$ : Observable<OrdemService>
  private loaded : boolean= false;
   a= {}
  
  constructor(private http: HttpClient) { }


  get(): Observable<OrdemService[]> {
    this.a = [this.OSSub$.asObservable]
    return   this.http.get<OrdemService[]>(this.url1)
  
}
  getid(i):Observable<OrdemService>{
    
  return this.http.get<OrdemService>(`${this.url}/listos/`+i)
 
    
  }

patchStts(i:OrdemService){
  return this.http.patch(`${this.url}/editStt/${i.id}`, i)
}
eidtObs(i:OrdemService){
  return this.http.patch(`${this.url}/editObs/${i.id}`, i)
}
deletOs(s:OrdemService){
  return this.http.delete(`${this.url}/deleteOs/${s.id}`)
}

  save(v:OrdemService): Observable<OrdemService>{
    if(!this.loaded){
    return this.http.post<OrdemService>(`${this.url}/saveos`, v)
    this.loaded = true
    }
      }
}
