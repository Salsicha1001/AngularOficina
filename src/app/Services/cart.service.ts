import { Observable } from 'rxjs';
import { Cart } from './../edit-os/cart.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly url: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }


save(c:Cart):Observable <Cart>{
  return this.http.post<Cart>(`${this.url}/savecart`, c)
}


get(){
  return this.http.get<Cart>(`${this.url}/getcart`)
}

delete(s:Cart){
  return this.http.delete(`${this.url}/deletecart/${s.id}`)
}


}
