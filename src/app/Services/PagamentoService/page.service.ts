import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagameto } from 'src/app/pagamento/Pag.Model';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  readonly url: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  savePag(p:Pagameto){
      return this.http.post<Pagameto>(`${this.url}/savepag`, p)
   
  }
  
  getId(i): Observable<Pagameto[]> {

    return   this.http.get<Pagameto[]>(`${this.url}/getpag/`+i)
  
}
}
