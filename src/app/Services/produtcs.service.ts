import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Peca } from '../add-estoque/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutcsService {
  readonly url: string = 'http://localhost:3000'
  readonly url1: string = 'http://localhost:3000/getproducts'
  private ProdSub$ : BehaviorSubject<Peca[]> = new BehaviorSubject<Peca[]>(null)
  private loaded : boolean= false;
  private produt:Peca[]=[]
  constructor(private http: HttpClient) { }


//Solucão
  get(): Observable<Peca[]> {
  
    return  this.http.get<Peca[]>(this.url1)
 

}

  save(p:Peca): Observable<Peca>{
    return this.http.post<Peca>(`${this.url}/saveProduct`, p)
   }
   geta(): Observable <Peca[]> {
    return this.http.get<Peca[]>(`${this.url1}/getproducts`)
  }
}

