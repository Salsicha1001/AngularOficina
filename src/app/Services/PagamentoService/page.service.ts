import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagameto } from 'src/app/pagamento/Pag.Model';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  readonly url: string = 'http://localhost:3000'
  private loaded : boolean= false;
  constructor(private http: HttpClient) { }

  savePag(p:Pagameto){
    if(!this.loaded){
      return this.http.post<Pagameto>(`${this.url}/savepag`, p)
      this.loaded = true
      }
  }
  
  getId(i): Observable<Pagameto[]> {

    return   this.http.get<Pagameto[]>(`${this.url}/getpag/`+i)
  
}
}
