import { OrdemService } from './../../add-os/OrdemS.model';
import { Cart } from './../../edit-os/cart.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  readonly url: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  get(i, f,a){
      return this.http.get<OrdemService[]>(`${this.url}/getrela/${i}/${a}/${f}`)
  }
  getdono(i, f){
    return this.http.get<OrdemService[]>(`${this.url}/getreladono/${i}/${f}`)
}
}
