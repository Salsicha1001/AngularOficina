import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  readonly url: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  get(i, f){
    return this.http.get(`${this.url}/getrela/${i}/${f}`)
  }
}
