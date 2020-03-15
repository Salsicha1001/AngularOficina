import { HttpClient } from '@angular/common/http';
import { OrdemService } from './../add-os/OrdemS.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsServiceService {
  readonly url: string = 'http://localhost:3000'
  readonly url1: string = 'http://localhost:3000/listosall'
  private OSSub$ : BehaviorSubject<OrdemService[]> = new BehaviorSubject<OrdemService[]>(null)
  private loaded : boolean= false;
   a= {}
  
  constructor(private http: HttpClient) { }


  get(): Observable<OrdemService[]> {
    if(!this.loaded){
      this.http.get<OrdemService[]>(this.url1)
      .subscribe(this.OSSub$)
      this.a = [this.OSSub$.asObservable]
      this.loaded = true
    }

  return this.OSSub$.asObservable()
}


  save(v:OrdemService): Observable<OrdemService>{
    return this.http.post<OrdemService>(`${this.url}/saveos`, v)
      }
}
