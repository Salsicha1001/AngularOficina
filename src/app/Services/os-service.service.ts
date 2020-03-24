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

      this.http.get<OrdemService[]>(this.url1)
      .subscribe(this.OSSub$)
      this.a = [this.OSSub$.asObservable]

    

  return this.OSSub$.asObservable()
}
  getid(i):Observable<OrdemService>{
    
  return this.http.get<OrdemService>(`${this.url}/listos/`+i)
 
    
  }



  save(v:OrdemService): Observable<OrdemService>{
    return this.http.post<OrdemService>(`${this.url}/saveos`, v)
      }
}